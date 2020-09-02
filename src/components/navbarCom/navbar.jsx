import React, { Component } from "react";

import Linkedin from "../images/linkedin.svg";
import Github from "../images/git.svg";
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  FormControl,
  Form,
  NavDropdown,
  MenuItem,
  NavbarBrand,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";

const githubLink = "https://github.com/shubham-bhagat";
const LinkndinLink = "https://www.linkedin.com/in/shubham-bhagat-3822a4150/";

class Navbars extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand activeClassName="active" href="Portfolio/selection">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Navbar.Brand href={githubLink} target="_blank">
                <img
                  src={Github}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Brand href={LinkndinLink} target="_balnk">
                <img
                  src={Linkedin}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>

              <Nav.Link href="Portfolio/About">About</Nav.Link>
              <Nav.Link href="Portfolio/projects">Project</Nav.Link>
              <Nav.Link href="Portfolio/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navbars;
