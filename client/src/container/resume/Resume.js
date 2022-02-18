import React, { useState } from "react";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import SectionHeading from "../../utilities/SectionHeading/SectionHeader";
import { ReactComponent as EducationLogo } from "../../assets/resume/education.svg";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setcarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreenHandler !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logo: "education.svg" },
    { label: "Work History", logo: "work-history.svg" },
    { label: "Programming Skills", logo: "programming-skills.svg" },
    { label: "Projects", logo: "projects.svg" },
    { label: "Interests", logo: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express Js", ratingPercentage: 85 },
    { skill: "Node Js", ratingPercentage: 85 },
    { skill: "Mongo DB", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Technologies Used: React JS, Bootsrap",
      subHeading:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Technologies Used: React JS, Bootsrap",
      subHeading:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Technologies Used: React JS, Bootsrap",
      subHeading:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Legon Accra, Ghana"}
        subHeading={"University of Legon Accra, Ghana"}
        fromDate={"2017"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"University of Legon Accra, Ghana"}
        subHeading={"University of Legon Accra, Ghana"}
        fromDate={"2017"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"University of Legon Accra, Ghana"}
        subHeading={"University of Legon Accra, Ghana"}
        fromDate={"2017"}
        toDate={"2022"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"University of Legon Accra, Ghana"}
        subHeading={"University of Legon Accra, Ghana"}
        fromDate={"2017"}
        toDate={"2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as MERN stack web and mobile developer and also an
          online instructor on udemy. - Developed an ecommerce website for
          client with the dashboard for managing the products, managing reviews,
          users, payment etc. . - Integrated the web app with backend services
          to create new user onboarding application with dynamic form content.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed an ecommerce website for client with the dashboard for
          managing the products, managing reviews, users, payment etc. .
        </span>
        <br />
        <span className="resume-description-text">
          - Developed an ecommerce website for client with the dashboard for
          managing the products, managing reviews, users, payment etc. .
        </span>
        <br />
        <span className="resume-description-text">
          - Developed an ecommerce website for client with the dashboard for
          managing the products, managing reviews, users, payment etc. .
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"> </div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Teaching"
          description="University of Legon Accra, Ghana"
        />
        <ResumeHeading
          heading="Teaching"
          description="University of Legon Accra, Ghana"
        />
        <ResumeHeading
          heading="Teaching"
          description="University of Legon Accra, Ghana"
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setcarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/resume/${bullet.logo}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <SectionHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons">
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreen()}</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
