import { ToDoApi } from "../API/ToDoApi";
import { getFormattedDate } from "./news-reducer";

const LOAD_LISTS = "LOAD_LISTS";
const ADD_ELEM = "ADD_ELEM";
const UPDATE_ELEM = "UPDATE_ELEM";
const CLEAR_ELEM = "CLEAR_ELEM";

let initialState = {
    lists : [],
    elem:{
        "header" : "СОЗДАТЬ ЭЛЕМЕНТ TODO",
        "resetBtn" : "Очистить",
        "submitBtn" : "Создать",
        "id" : null,
        "name" : "",
        "description" : "",
        "priority": 0,
        "listId": 0
    }
}

const todoReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOAD_LISTS:
            newState.lists = action.lists;
            return newState;
        case UPDATE_ELEM:
            newState.elem = {header : "ИЗМЕНИТЬ ЭЛЕМЕНТ TODO", resetBtn : "Отменить изменение", submitBtn : "Именить",
                             id : action.id, name : action.name, description : action.description, 
                             priority: action.priority, listId : action.listId};
            return newState;
        case ADD_ELEM:
            newState.elem = {header : "СОЗДАТЬ ЭЛЕМЕНТ TODO", resetBtn : "Очистить", submitBtn : "Создать",
                             id : action.id, name : action.name, description : action.description, 
                             priority: action.priority, listId : action.listId};
            return newState;
        case CLEAR_ELEM:
            newState.elem = initialState.elem;
            return newState;
        default:
            return newState;
    }
}

export function loadToDoActionCreator(lists){
    return {type : LOAD_LISTS, lists : lists}
}

export function updateToDoElemActionCreator(id, name, desc, priority, listId){
    return {type : UPDATE_ELEM, id : id, name : name, description : desc, priority: priority, listId : listId}
}

export function addToDoElemActionCreator(id, name, desc, priority, listId){
    return {type : ADD_ELEM, id : id, name : name, description : desc, priority: priority, listId : listId}
}

export function ClearElemActionCreator(listId){
    return {type : CLEAR_ELEM, listId : listId}
}

export function loadToDoThunkCreator(){
    return(dispatch) => {
        ToDoApi.getToDoLists().then(data => {

            if(data === undefined){
                ToDoApi.auth().then(() => {
                    dispatch(loadToDoThunkCreator());
                })
            }
            else{
                data.map((value) => {
                    value.items.map((item) =>{
                        item.createDateTime = getFormattedDate(item.createDateTime);
                        return item;
                    });

                    return value;
                });

                dispatch(loadToDoActionCreator(data));
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export function setListThunkCreator(name){
    return(dispatch) => {
        ToDoApi.setList(name)
        .then((response) =>{

            if(response.status === 200){
                dispatch(loadToDoThunkCreator());
            }
            else{
                ToDoApi.auth().then(() =>{
                    dispatch(setListThunkCreator(name));
                })
            }
        })
    }
}

export function deleteListThunkCreator(id){
    return(dispatch) => {
        ToDoApi.deleteList(id)
        .then((response) =>{

            if(response.status === 200){
                dispatch(loadToDoThunkCreator());
            }
            else{
                ToDoApi.auth().then(() =>{
                    dispatch(deleteListThunkCreator(id));
                })
            }
        })
    }
}

export function setListElemThunkCreator(id, name, desc, priority, listId){
    return(dispatch) => {
        ToDoApi.setListElem(name, desc, parseInt(priority), parseInt(listId), parseInt(id))
        .then((response) =>{
            if(response.status === 200){
                dispatch(loadToDoThunkCreator());
            }
            else{
                ToDoApi.auth().then(() =>{
                    dispatch(setListElemThunkCreator(id, name, desc, priority, listId));
                })
            }

        })
    }
}

export function deleteListElemThunkCreator(ownerId, id){
    return(dispatch) => {
        ToDoApi.deleteListElem(ownerId, id)
        .then((response) =>{

            if(response.status === 200){
                dispatch(loadToDoThunkCreator());
            }
            else{
                ToDoApi.auth().then(() =>{
                    dispatch(deleteListElemThunkCreator(ownerId, id));
                })
            }
        })
    }
}

export function checkListElemThunkCreator(ownerId, id){
    return(dispatch) => {
        ToDoApi.checkListElem(ownerId, id)
        .then((response) =>{

            if(response.status === 200){
                dispatch(loadToDoThunkCreator());
            }
            else{
                ToDoApi.auth().then(() =>{
                    dispatch(checkListElemThunkCreator(ownerId, id));
                })
            }
        })
    }
}

export default todoReducer;