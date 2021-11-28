import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function CreateListForm({updateTrigger}){


    return(
        <Card className="mt-4">
            <Card.Header>СОЗДАТЬ СПИСОК TODO</Card.Header>
            <Card.Body>
                <Form >
                    <Form.Group>
                        <Form.Label>Название</Form.Label>
                        <Form.Control type="text" required/>
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