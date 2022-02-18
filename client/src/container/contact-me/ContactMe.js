import React from "react";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import loading from "../../assets/contact-me/load2.gif";
import bg from "../../assets/contact-me/mailz.jpeg";
import Typical from "react-typical";
import SectionHeader from "../../utilities/SectionHeading/SectionHeader";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreenHandler !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  return (
    <div className="main-container" id={props.id || ""}>
      <SectionHeader title="Contact Me" subHeading="Let's Keep in Touch" />
      <div className="central-form">
        <div className="col">
          <h2>
            <Typical
              loop={Infinity}
              steps={["Get In Touch 📧", 3000]}
            ></Typical>
          </h2>
          {/** Icon Links**/}
          <a href="https://github.com/akjha96/ReactifolioBs4_Akj/blob/master/src/App.js">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
