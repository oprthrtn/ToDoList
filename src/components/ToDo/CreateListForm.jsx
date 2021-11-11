import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function CreateListForm({updateTrigger}){

    const {register, getValues} = useForm();

    const SubmitListName = (event) => { 
        let data = {"id" : null, "name" : getValues("ListName")}
        fetch('https://sas.front.kreosoft.space/api/ToDoList', {
            credentials: 'same-origin',  
            method: 'POST',              
            body: JSON.stringify(data),  
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')})
        });

        updateTrigger(true);
        event.preventDefault();
        event.stopPropagation();
    };

    return(
        <Card className="mt-4">
            <Card.Header>СОЗДАТЬ СПИСОК TODO</Card.Header>
            <Card.Body>
                <Form onSubmit={SubmitListName}>
                    <Form.Group>
                        <Form.Label>Название</Form.Label>
                        <Form.Control type="text" {...register("ListName")} required/>
                    </Form.Group>
                    <div className="mt-4">
                        <Button variant="secondary" className="border-dark me-2" type="reset">Очистить</Button>
                        <Button variant="success" type="submit">Создать</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CreateListForm;