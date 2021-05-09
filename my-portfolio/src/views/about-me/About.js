import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProfilePicuture from "../../assets/img/profile/profile-pic.webp";

const About = () => {
  return (
    <div id="about">
      <h1>About Me</h1>
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <Row>
              <Image src={ProfilePicuture} thumbnail />
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
