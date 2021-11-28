import * as axios from 'axios';

const baseURL = 'https://sas.front.kreosoft.space/api/';

const instance = axios.create({
    baseURL : baseURL
});

function getToDoLists(){
    return instance.get('ToDoList',{
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }})
    .then(response => {
        if(response.status === 200){
            return response.data;
        }
    })
    .catch(error =>{
        console.log(error.response.data.error)
    });
}

export const ToDoApi = {
    getToDoLists : getToDoLists
}