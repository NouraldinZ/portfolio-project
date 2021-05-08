import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/icons/NZ-alt.png";
import "./navbar-style.css";

export const MyNavbar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        className="animate-navbar nav-theme justify-content-between"
        expand="md"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img alt="" src={logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{ color: "white" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#about">
              About
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              eventKey={2}
              href="#experience"
            >
              Experience
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#projects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
