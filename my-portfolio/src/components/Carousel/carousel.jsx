import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";
import "./carouselStyle.css";

const MyCarousel = () => {
  return (
    <div>
      <Carousel controls={false} fade={true}>
        <Carousel.Item interval={7500}>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Quote Of the Day</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7500}>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Quote Of the Day</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7500}>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Quote Of the Day</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
