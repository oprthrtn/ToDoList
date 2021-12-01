import React from "react";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, Tab, Tabs } from "react-bootstrap";
import ListElem from "./ListElem";
import {useDispatch} from 'react-redux';
import { deleteListThunkCreator } from "../../reducers/todo-reducer";

function TabLists(props) {
    const dispatch = useDispatch();

    function handleClick(id){
        dispatch(deleteListThunkCreator(id));
    }

    return(
        <Tabs id="uncontrolled-tab-example" className="mt-4 nav-fill pt-3">
        { 
            props.todoPage.lists.map((value) => {
                return(
                    <Tab eventKey={value.id} key ={value.id} title ={value.name}>
                        <Card style={{border: "none"}}>
                            <Card.Body className="d-flex px-0">
                                <h2 className="flex-grow-1 me-4">{value.name}</h2>
                                <Button variant="danger" className="border-dark align-items-center d-flex" onClick={() => handleClick(value.id)}>
                                    <FontAwesomeIcon icon={faTrashAlt}/>
                                    <div className="ms-2">Удалить Список</div>
                                </Button>
                            </Card.Body>
                        </Card>
                        <div style={{borderRadius: "5px", border: "1px solid #e0e0e0", overflow: "hidden"}}>
                            {
                                value.items.map((val) => {
                                    return(
                                        <ListElem key ={val.id} ownerId={value.ownerId} listId={value.id} {...val}/>
                                    )
                                })
                            }
                        </div>
                    </Tab>
                )
            })
        }
        </Tabs>
    )
}


export default TabLists;