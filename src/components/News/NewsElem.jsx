import React from 'react';
import {Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';

function getFormattedDate(datetime) {
  var date = new Date(datetime);
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return day + '.' + month + '.' + year;
}

function NewsElem({item, updateTrigger}){

  function like(id){
    fetch("https://sas.front.kreosoft.space/api/News/like", {
        credentials: 'same-origin',  
        method: 'POST',              
        body: JSON.stringify({ "id": id}),  
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
    });
    updateTrigger(true);
  }

  return (
    <Card className="mt-4">
        <Card.Header className="row m-0">
            <h5 className="col-8">{item.title}</h5>
            <small className="col-4 text-muted">{item.tags}</small>
        </Card.Header>
        <Card.Body>
          <Card.Text>{item.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-wrap m-0">
                <div className="d-flex flex-grow-1">
                    <strong className="me-2">Date:</strong>
                    <div>{getFormattedDate(item.date)}</div>
                </div>
    
                <div className="d-flex align-items-center">
                    <div className="me-2" style={{fontStyle: "italic"}}>{item.serviceInfo.likes}</div> 
                    <FontAwesomeIcon type="button" onClick={() => like(item.id)} style={{color: "red"}} icon={faHeart} />
                </div>
        </Card.Footer>
    </Card>
  );
}

export default NewsElem;