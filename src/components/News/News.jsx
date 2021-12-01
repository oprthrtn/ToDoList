import React from "react";
import {Container} from "react-bootstrap";
import NewsCarousel from "./NewsCarousel";
import NewsElem from "./NewsElem";



class News extends React.Component{
  render() {
    return (
      <Container className="my-4 flex-grow-1">
        <NewsCarousel/>
        <h1 className="text-center my-4">Новости</h1>
        {
          this.props.newsPage.news.map((value) => {
            return <NewsElem key={value.id} id={value.id} title={value.title} content={value.content} tags={value.tags} date={value.date} likes={value.serviceInfo.likes}/>
          })
        }
      </Container>
    )
  }
}

export default News;