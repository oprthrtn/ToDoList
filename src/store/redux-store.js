import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import newsReducer from "../reducers/news-reducer";
import todoReducer from "../reducers/todo-reducer";


let reducers = combineReducers({
    newsPage : newsReducer,
    todoPage : todoReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;