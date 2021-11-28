import {Container} from "react-bootstrap";
import CreateListElemForm from "./CreateListElemForm";
import CreateListForm from "./CreateListForm";
import LegendToDo from "./LegendToDo";
import TabListsContainer from "./TabListsContainer";

const ToDoList = function(){
    


    return (
        <Container className="my-4 flex-grow-1">
            <LegendToDo/>
            <CreateListForm/>
            <CreateListElemForm/>
            <TabListsContainer/>
        </Container>
    )
}

export default ToDoList;