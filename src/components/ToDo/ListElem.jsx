import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonGroup, Card } from "react-bootstrap";

function ListElem(props){
    if(props.isDone){
        return(
          <Card style={{borderRadius: "0px"}}>
              <Card.Body className="d-flex" style={{backgroundColor: "#c3e6cb", borderLeft: "solid 10px white"}}>
                  <div className="col">
                      <div className="d-flex flex-wrap">
                          <h5 className="me-4">{props.name}</h5>
                          <div>{props.createDateTime}</div>
                      </div>

                      <div className="mt-4"></div>
                  </div>
                  <ButtonGroup className="align-items-center">
                    <FontAwesomeIcon style={{color: "green", fontSize: "50px"}} icon={faCheck}></FontAwesomeIcon>
                  </ButtonGroup>
              </Card.Body>
          </Card>)                
  }
  else{

      let colorLeft;
      if(props.priority === 0){
          colorLeft = "rgb(224, 224, 224)";
      }
      else if(props.priority === 1){
          colorLeft = "#ffc107";
      }
      else{
          colorLeft = "#ff0000";
      }

      return(
          <Card style={{borderRadius: "0px"}}>
              <Card.Body className="d-flex" style={{borderLeft: "solid 10px " + colorLeft}}>
                  <div className="col">
                      <div className="d-flex flex-wrap">
                          <h5 className="me-4">{props.name}</h5>
                          <div>{props.createDateTime}</div>
                      </div>

                      <div className="mt-4">{props.description}</div>
                  </div>
                  <ButtonGroup className="align-items-center">
                      <FontAwesomeIcon className="btn btn-success bg-light" type="button" style={{color: "green", fontSize: "35px", width: "100%"}} icon={faCheck}  />
                      <FontAwesomeIcon className="btn btn-warning bg-light" type="button" /*onClick={() => checkElem(elem.id, ownerID)}*/  style={{color: "#ffc107", fontSize: "35px", width: "100%"}}icon={faPen} />
                      <FontAwesomeIcon className="btn btn-danger bg-light" type="button" style={{color: "#ff0000", fontSize: "35px", width: "100%"}} icon={faTrashAlt} />
                  </ButtonGroup>
              </Card.Body>
          </Card>)   
  }
}

export default ListElem;