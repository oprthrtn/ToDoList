import { ToDoApi } from "../API/ToDoApi";

const LOAD_LISTS = "LOAD_LISTS";

let initialState = {
    lists : []
}

const todoReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOAD_LISTS:
            newState.lists = action.lists;
            console.log(newState);
            return newState;
        default:
            return newState;
    }
}

export function loadToDoActionCreator(lists){
    return {type : LOAD_LISTS, lists : lists}
}


export function loadToDoThunkCreator(){
    return(dispatch) => {
        ToDoApi.getToDoLists().then(data => {
            console.log(data);
            dispatch(loadToDoActionCreator(data));
        })
    }
}

export default todoReducer;