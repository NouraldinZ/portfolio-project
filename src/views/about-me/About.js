import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProfilePicuture from "../../assets/img/profile/profile-pic.webp";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="heading">About Me</h1>
        <Container>
          <Row className="align-items-center pt-3 pb-3">
            <Col md={6} xs={12}>
              {/* Profile Picture */}
              <Row>
                <Image
                  src={ProfilePicuture}
                  thumbnail
                  fluid
                  className="profile-pic justify-content-end"
                />
              </Row>
            </Col>
            {/* About me details */}
            <Col md={6} xs={12} className="about-me">
              <Row>HIIII</Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
