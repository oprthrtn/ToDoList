import * as axios from 'axios';

const baseURL = 'https://sas.front.kreosoft.space/api/';

const instance = axios.create({
    baseURL : baseURL
});

function auth(){
    return instance.post('auth',{"username" : "oper", "password" : "oper"})
    .then(response => {
        if(response.status === 200){
            localStorage.setItem('token', response.data.accessToken);
        }
    })
    .catch(error =>{
        console.log(error)
    });
}

function getToDoLists(){
    return instance.get('ToDoList',{
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error =>{
        console.log(error)
    });
}

function setList(name){
    return instance.post('ToDoList',{"id" : null, "name" : name},
            {headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error =>{
        console.log(error)
    });
}

function deleteList(id){
    return instance.delete('ToDoList',{data : {"id" : id}, headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error =>{
        console.log(error)
    });
}

function setListElem(name, description, priority, listId, id){
    console.log(id)
    return instance.post('ToDoItem', {"id" : id, "name" : name, "description" : description, "priority" : priority, "listId" : listId}, 
        {headers: { 'Authorization' : `Bearer ${localStorage.getItem('token')}` }})
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error =>{
        console.log(error);
    });
}

function deleteListElem(ownerId, id){
    return instance.delete('ToDoItem',{data : {"ownerId" : ownerId, "id" : id}, headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error =>{
        console.log(error)
    });
}

function checkListElem(ownerId, id){
    return instance.post('ToDoItem/check',{"ownerId" : ownerId, "id" : id},
            {headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error =>{
        console.log(error)
    });
}

export const ToDoApi = {
    getToDoLists : getToDoLists,
    setList : setList,
    deleteList : deleteList,
    setListElem : setListElem,
    deleteListElem : deleteListElem,
    checkListElem : checkListElem,
    auth : auth
}