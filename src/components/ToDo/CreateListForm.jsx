import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import { setListThunkCreator } from "../../reducers/todo-reducer";

function CreateListForm(){
    const nameRef = React.createRef();
    const dispatch = useDispatch();

    const setList = (event) => { 

        dispatch(setListThunkCreator(nameRef.current.value));
        event.preventDefault();
        event.stopPropagation();
    };


    return(
        <Card className="mt-4">
            <Card.Header>СОЗДАТЬ СПИСОК TODO</Card.Header>
            <Card.Body>
                <Form onSubmit={setList}>
                    <Form.Group>
                        <Form.Label>Название</Form.Label>
                        <Form.Control type="text" ref={nameRef} required/>
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