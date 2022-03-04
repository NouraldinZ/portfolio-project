import React, { useState } from "react";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import loading from "../../assets/contact-me/load2.gif";
import bg from "../../assets/contact-me/mailz.jpeg";
import Typical from "react-typical";
import SectionHeader from "../../utilities/SectionHeading/SectionHeader";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreenHandler !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);

      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.message);
        toast.error(res.data.message);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.message);
        toast.success(res.data.message);
        setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <SectionHeader title="Contact Me" subHeading="Let's Keep in Touch" />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={bg} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              onChange={handleMessage}
              style={{ minHeight: "auto" }}
            />
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" style={{ margin: "5px" }} />
                {bool ? (
                  <b className="load">
                    <img src={loading} alt="image not responding"></img>
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
