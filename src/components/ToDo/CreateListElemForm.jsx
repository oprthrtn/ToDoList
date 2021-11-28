import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


function CreateListElemForm(){

    return(
        <Card className="mt-4">
            <Card.Header>СОЗДАТЬ ЭЛЕМЕНТ TODO</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Заголовок</Form.Label>
                        <Form.Control type="text"  required/>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label>Приоритет</Form.Label>
                                <Form.Select >
                                    <option value={0}>Обычный</option>
                                    <option value={1}>Важный</option>
                                    <option value={2}>Критичный</option>
                                </Form.Select>
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Список</Form.Label>
                                
                                <Form.Select  required>
                                    <option></option>                                    
                                </Form.Select>
                            </div>
                        </div>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea" type="text" required></Form.Control>
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