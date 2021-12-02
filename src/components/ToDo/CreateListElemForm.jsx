import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import { ClearElemActionCreator, setListElemThunkCreator, updateToDoElemActionCreator, addToDoElemActionCreator } from "../../reducers/todo-reducer";

function CreateListElemForm(props){

    const dispatch = useDispatch();

    const nameRef = React.createRef();
    const priorityRef = React.createRef();
    const listRef = React.createRef();
    const descRef = React.createRef();

    var state = useSelector((state) => state.todoPage.elem);

    const onChange = () => {
        

        if(state.header === "СОЗДАТЬ ЭЛЕМЕНТ TODO"){
            dispatch(addToDoElemActionCreator(state.id, nameRef.current.value, descRef.current.value, 
                priorityRef.current.value, listRef.current.value));
        }
        else{
            dispatch(updateToDoElemActionCreator(state.id, nameRef.current.value, descRef.current.value, 
                priorityRef.current.value, listRef.current.value));
        }
    }

    function clearElem(){
        dispatch(ClearElemActionCreator());
    }
    const setListElem = (event) => {

        let name = nameRef.current.value;
        let priority = priorityRef.current.value;
        let listId = listRef.current.value;
        let desc = descRef.current.value;

        dispatch(setListElemThunkCreator(state.id, name, desc, priority, listId));
        clearElem();
        event.preventDefault();
        event.stopPropagation();
    }

    return(
        <Card className="mt-4">
            <Card.Header>{state.header}</Card.Header>
            <Card.Body>
                <Form onSubmit={setListElem}>
                    <Form.Group>
                        <Form.Label>Заголовок</Form.Label>
                        <Form.Control type="text" value={state.name} ref={nameRef} onChange={onChange} required/>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label>Приоритет</Form.Label>
                                <Form.Select value={state.priority} ref={priorityRef} onChange={onChange}>
                                    <option value={0}>Обычный</option>
                                    <option value={1}>Важный</option>
                                    <option value={2}>Критичный</option>
                                </Form.Select>
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Список</Form.Label>
                                <Form.Select value={state.listId} ref={listRef} onChange={onChange} disabled={state.header === "ИЗМЕНИТЬ ЭЛЕМЕНТ TODO"}>
                                    {
                                         props.todoPage.lists.map((value) => {
                                            return(
                                                <option key ={value.id} value={value.id}>{value.name} </option>  
                                            )
                                         })
                                    }                                   
                                </Form.Select>
                            </div>
                        </div>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea" type="text"  value={state.description} ref={descRef} onChange={onChange} required></Form.Control>
                    </Form.Group>
                    <div className="mt-4">
                        <Button variant="secondary" className="border-dark me-2" onClick={() => clearElem()} type="reset">{state.resetBtn}</Button>
                        <Button variant="success" type="submit">{state.submitBtn}</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CreateListElemForm;