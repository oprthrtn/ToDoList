import { connect } from "react-redux";
import React from 'react';
import {loadToDoThunkCreator} from "../../reducers/todo-reducer";
import CreateListElemForm from "./CreateListElemForm";

class MiddleToDoListComponent extends React.Component {
    componentDidMount() {
        this.props.loadToDoThunkCreator();
    }
    render(){
        return(<CreateListElemForm {...this.props}/>)
    }
}

function mapStateToProps(state){
    return {todoPage : state.todoPage}
}

const CreateListFormContainer = connect(mapStateToProps, {loadToDoThunkCreator }) (MiddleToDoListComponent)
export default CreateListFormContainer;