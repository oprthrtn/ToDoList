import React from 'react';
import {Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {postLikeThunkCreator} from '../../reducers/news-reducer'
import {useDispatch} from 'react-redux'

function NewsElem(props){

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(props.id);
    dispatch(postLikeThunkCreator(props.id));
  }

  return (
    <Card className="mt-4">
        <Card.Header className="d-flex align-items-center">
            <h5 className="flex-grow-1 ">{props.title}</h5>
            <small className="text-muted">{props.tags}</small>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-wrap m-0">
                <div className="d-flex flex-grow-1">
                    <strong className="me-2">Date:</strong>
                    <div>{props.date}</div>
                </div>
    
                <div className="d-flex align-items-center">
                    <div className="me-2" style={{fontStyle: "italic"}}>{props.likes}</div> 
                    <FontAwesomeIcon type="button" onClick={handleClick} style={{color: "red"}} icon={faHeart} />
                </div>
        </Card.Footer>
    </Card>
  );
}

export default NewsElem;