import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


function CreateListElemForm({items, updateTrigger}){
    const {register, getValues} = useForm();

    const SubmitListElem = (event) => {
        let data = {"id" : null, "name" : getValues("title"), "description": getValues("description"),
                    "priority": parseInt(getValues("priority")), "listId": parseInt(getValues("list"))
                };
        
        fetch('https://sas.front.kreosoft.space/api/ToDoItem', {
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
            <Card.Header>СОЗДАТЬ ЭЛЕМЕНТ TODO</Card.Header>
            <Card.Body>
                <Form onSubmit={SubmitListElem}>
                    <Form.Group>
                        <Form.Label>Заголовок</Form.Label>
                        <Form.Control type="text" {...register("title")} required/>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label>Приоритет</Form.Label>
                                <Form.Select {...register("priority")}>
                                    <option value={0}>Обычный</option>
                                    <option value={1}>Важный</option>
                                    <option value={2}>Критичный</option>
                                </Form.Select>
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Список</Form.Label>
                                
                                <Form.Select {...register("list")} required>
                                    <option></option>
                                    {items.map(item =>(
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                    
                                </Form.Select>
                            </div>
                        </div>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea" type="text" {...register("description")} required></Form.Control>
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

export default CreateListElemForm;