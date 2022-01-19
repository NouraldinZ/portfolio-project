import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text"> Nouraldin</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Devloper",
                    3000,
                    "jack",
                    3000,
                    "Devloper",
                    3000,
                    "Zeina",
                    3000,
                    "Nour",
                    3000,
                  ]}
                ></Typical>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Nour's Resume.pdf" target="_blank">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
