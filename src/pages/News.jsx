import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import NewsCarousel from "../components/News/NewsCarousel";
import NewsElem from "../components/News/NewsElem";

const News = function(){
  
  const [items, setItems] = useState([]);
  const [trigger, setTrigger] = useState(false);

  function updateTrigger(){
    setTrigger(true);
  }

  useEffect(() => {
    fetch("https://sas.front.kreosoft.space/api/News")
        .then(res => res.json())
        .then(
          (result) => {
            setTrigger(false);;
            setItems(result);
          },
        )
  }, [trigger])

  return (
    <Container>
      <NewsCarousel/>
      <h1 className="text-center my-4">Новости</h1>
      {items.map(item => (
        <NewsElem key={item.id} item = {item} updateTrigger={updateTrigger}/>
      ))}
      
    </Container>
  )
}

export default News;