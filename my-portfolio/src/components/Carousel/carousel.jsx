import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../scroll/scroll-down";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";
import "./carousel-style.css";

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
            <p>"what is grief if not love perserving? - wandavision"</p>
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
            <p>
              <strong className="quote">
                "من سار على الدرب تعثّر وسقط ، تألم ونهض ، خُذل و وقف ، أتته
                لحظات يأس فحارب ، ثم مشى بالعزيمة وظن بالله ظن الخير حتى وصل";
              </strong>
            </p>
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
            <p className="quote">
              "طلبت من الله الكثير ومنعه عني، وكان منعه قمة عطائه، فتعلمت أن
              أطلب ما أريد وأقبل بما يريد، فدائماً إرادته تأتي بالخير وإرادتي
              تسوقني إلى الشر، ولا زال يأخذ بيدي إلى الخير حيث تيقنت أنه هو الله
              أرحم الراحمين. د.مصطفى محمود"
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;
