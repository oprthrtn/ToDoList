import { connect } from "react-redux";
import React from 'react';
import {loadToDoThunkCreator} from "../../reducers/todo-reducer";
import TabLists from "./TabLists";

class MiddleNewsComponent extends React.Component {
    componentDidMount() {
        this.props.loadToDoThunkCreator();
    }
    render(){
        return(<TabLists {...this.props}/>)
    }
}

function mapStateToProps(state){
    return {todoPage : state.todoPage}
}

const TabListsContainer = connect(mapStateToProps, {loadToDoThunkCreator }) (MiddleNewsComponent)

export default TabListsContainer;