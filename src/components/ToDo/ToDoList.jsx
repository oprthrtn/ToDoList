import {Container} from "react-bootstrap";
import CreateListFormContainer from "./CreateListElemFormContainer";
import CreateListForm from "./CreateListForm";
import LegendToDo from "./LegendToDo";
import TabListsContainer from "./TabListsContainer";

const ToDoList = function(){
    


    return (
        <Container className="my-4 flex-grow-1">
            <LegendToDo/>
            <CreateListForm/>
            <CreateListFormContainer/>
            <TabListsContainer/>
        </Container>
    )
}

export default ToDoList;