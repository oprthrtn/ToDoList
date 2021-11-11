import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";
import CreateListElemForm from "../components/ToDo/CreateListElemForm";
import CreateListForm from "../components/ToDo/CreateListForm";
import LegendToDo from "../components/ToDo/LegendToDo";
import TabLists from "../components/ToDo/TabLists";

const ToDoList = function(){
    
    const [items, setItems] = useState([]);
    const [trigger, setTrigger] = useState(false);
    
    function updateTrigger(){
        setTrigger(true);
    }

    useEffect(() => {
        fetch('https://sas.front.kreosoft.space/api/ToDoList', {
            headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')})
        })
        .then(res => res.json())
        .then(
          (result) => {
            setTrigger(false);
            setItems(result);
        });
    }, [trigger])

    return (
        <Container className="my-4">
            <LegendToDo/>
            <CreateListForm updateTrigger = {updateTrigger}/>
            <CreateListElemForm items = {items} updateTrigger = {updateTrigger}/>
            <TabLists items = {items} updateTrigger = {updateTrigger}/>
        </Container>
    )
}

export default ToDoList;