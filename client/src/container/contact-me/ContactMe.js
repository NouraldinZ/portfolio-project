import React from "react";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import loading from "../../assets/contact-me/load2.gif";
import bg from "../../assets/contact-me/mailz.jpeg";
import "./ContactMe.css";
import SectionHeader from "../../utilities/SectionHeading/SectionHeader";

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
    </div>
  );
}
