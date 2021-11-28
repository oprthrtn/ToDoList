import { newsApi } from "../API/NewsApi";

const LOAD_NEWS = "LOAD_NEWS";

let initialState = {
    news : []
}
const newsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case LOAD_NEWS:
            newState.news = action.news;
            return newState;
        default:
            return newState;
    }
}

export function loadNewsActionCreator(news){
    return {type : LOAD_NEWS, news : news}
}


function getFormattedDate(datetime) {
    var date = new Date(datetime);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return day + '.' + month + '.' + year;
}


export function loadNewsThunkCreator(){
    return(dispatch) => {
        newsApi.getNews().then(data => {

            data.map((value) => {
                value.date = getFormattedDate(value.date);
                return value
            })

            dispatch(loadNewsActionCreator(data));
        })
    }
}

export function postLikeThunkCreator(id){
    return(dispatch) => {
        newsApi.postLike(id)
        .then(res =>{
            dispatch(loadNewsThunkCreator());
        })
    }
}

export default newsReducer;