import React from "react";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, Tab, Tabs } from "react-bootstrap";
import ListElem from "./ListElem";


function TabLists({items, updateTrigger}){
    
    function deleteList(listID){
        let data = {"id" : listID}
        fetch('https://sas.front.kreosoft.space/api/ToDoList', {
            credentials: 'same-origin',  
            method: 'DELETE',              
            body: JSON.stringify(data),  
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')})
        });
        updateTrigger(true);
    }
   
    return(
        <Tabs id="uncontrolled-tab-example" className="mt-4 nav-fill">
            {items.map(item => (
                <Tab eventKey={item.id} key={item.id}  title={item.name}>
                    <Card>
                        <Card.Body className="d-flex">
                            <h2 className="flex-grow-1 me-4">{item.name}</h2>
                            <Button variant="danger" className="border-dark me-2 align-items-center d-flex" onClick={() => deleteList(item.id)}>
                                <FontAwesomeIcon icon={faTrashAlt}/>
                                <div className="ms-2">Удалить Список</div>
                                </Button>
                        </Card.Body>
                    </Card>

                    {item.items.map(elem => (
                        <ListElem key ={elem.id} updateTrigger = {updateTrigger} elem = {elem} ownerID = {item.ownerId}/>
                    ))}
                </Tab>
            ))}
        </Tabs>
    )
}

export default TabLists;