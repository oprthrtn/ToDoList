import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonGroup, Card } from "react-bootstrap";


function checkElem(id, ownerID){
    let data = {"ownerId" : ownerID, "id" : id}
    fetch('https://sas.front.kreosoft.space/api/ToDoItem/check', {
        credentials: 'same-origin',  
        method: 'POST',              
        body: JSON.stringify(data),  
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')})
        }
    ); 
}

function deleteElem(id, ownerID){
    let data = {"ownerId" : ownerID, "id" : id}
    fetch('https://sas.front.kreosoft.space/api/ToDoItem', {
        credentials: 'same-origin',  
        method: 'DELETE',              
        body: JSON.stringify(data),  
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')})
        }
    ); 
}

function getFormattedDate(datetime) {
    var date = new Date(datetime);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return day + '.' + month + '.' + year;
}

function ListElem({elem, ownerID, updateTrigger}){
    if(elem.isDone){
        return(
          <Card key ={elem.id}>
              <Card.Body className="d-flex" style={{backgroundColor: "#c3e6cb", borderLeft: "solid 10px white"}}>
                  <div className="col">
                      <div className="d-flex flex-wrap">
                          <h5 className="me-4">{elem.name}</h5>
                          <div>{getFormattedDate(elem.createDateTime)}</div>
                      </div>

                      <div className="mt-4">{elem.description}</div>
                  </div>
                  <ButtonGroup className="align-items-center">
                    <FontAwesomeIcon style={{color: "green", fontSize: "50px"}} icon={faCheck}></FontAwesomeIcon>
                  </ButtonGroup>
              </Card.Body>
          </Card>)                
  }
  else{

      let colorLeft;
      if(elem.priority === 0){
          colorLeft = "rgb(224, 224, 224)";
      }
      else if(elem.priority === 1){
          colorLeft = "#ffc107";
      }
      else{
          colorLeft = "#ff0000";
      }

      return(
          <Card>
              <Card.Body className="d-flex" style={{borderLeft: "solid 10px " + colorLeft}}>
                  <div className="col">
                      <div className="d-flex flex-wrap">
                          <h5 className="me-4">{elem.name}</h5>
                          <div>{getFormattedDate(elem.createDateTime)}</div>
                      </div>

                      <div className="mt-4">{elem.description}</div>
                  </div>
                  <ButtonGroup className="align-items-center">
                      <FontAwesomeIcon className="btn btn-success bg-light" type="button" onClick={() => {checkElem(elem.id, ownerID); updateTrigger()}} style={{color: "green", fontSize: "35px", width: "100%"}} icon={faCheck}  />
                      <FontAwesomeIcon className="btn btn-warning bg-light" type="button" /*onClick={() => checkElem(elem.id, ownerID)}*/  style={{color: "#ffc107", fontSize: "35px", width: "100%"}}icon={faPen} />
                      <FontAwesomeIcon className="btn btn-danger bg-light" type="button" onClick={() => {deleteElem(elem.id, ownerID); updateTrigger()}} style={{color: "#ff0000", fontSize: "35px", width: "100%"}} icon={faTrashAlt} />
                  </ButtonGroup>
              </Card.Body>
          </Card>)   
  }
}

export default ListElem;