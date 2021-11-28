import { connect } from "react-redux";
import React from 'react';
import News from "./News";
import {loadNewsThunkCreator} from "../../reducers/news-reducer";

class MiddleNewsComponent extends React.Component {
    componentDidMount() {
        this.props.loadNewsThunkCreator();
    }
    render(){
        return(<News {...this.props}/>)
    }
}

function mapStateToProps(state){
    return {newsPage : state.newsPage}
}

const NewsContainer = connect(mapStateToProps, {loadNewsThunkCreator }) (MiddleNewsComponent)

export default NewsContainer;