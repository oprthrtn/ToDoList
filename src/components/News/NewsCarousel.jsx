import React from "react";
import {Carousel} from "react-bootstrap";

const NewsCarousel = function(){
    
    return (
      <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/final.png" 
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/ezh.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/2035.png"
              alt="Third slide"
            />
          </Carousel.Item>
      </Carousel>
    )
}

export default NewsCarousel;