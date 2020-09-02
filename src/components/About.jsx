import React, { Component } from "react";
import "./navbarCom/navbar.css";

import Chart from "./images/chart.svg";
import Bike from "./images/bike.png";
import Sing from "./images/sing.jpg";
import ImgAbout from "./images/about.jpg";

const gmailLink = "mailto: shubhambhagat7070@gmail.com";
const githubLink = "https://github.com/shubham-bhagat";
const LinkndinLink = "https://www.linkedin.com/in/shubham-bhagat-3822a4150/";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container row text-center">
          <span
            className="col-sm-7"
            style={{ fontSize: "20px", paddingTop: "150px " }}
          >
            <h1>about me</h1>
            <p>I'm a web designer and also a data scientist .</p>
            <p>
              I enjoy turning complex problems into simple, beautiful and
              intuitive designs. When I'm not coding, you'll find me cooking,
              gardening or working out in the park.
            </p>
            <a href={LinkndinLink} target="_blank">
              <button className="btn btn-primary glyphicon glyphicon-signal">
                Follow
              </button>
            </a>
          </span>
          <span className="col-sm-5">
            <img src={ImgAbout} height="500px" className="img-responsive" />
          </span>
        </div>
        <div></div>
        <br />
        <br />

        <div
          className="container-fluid"
          style={{ borderTop: "1px solid silver", marginTop: "50px" }}
        >
          <div className="row text-center">
            <span className="col-sm-4 text-center">
              <h3 style={{ marginTop: "150px" }}>Web designer</h3>
              <br />
              <h5>HTML 5</h5>
              <h5>JavaScript</h5>
              <h5>React</h5>
              <h5>PHP</h5>
              <h5>Bootstrap </h5>
            </span>

            <span
              className="col-sm-4 text-left   "
              style={{ marginTop: "120px" }}
            >
              <br />
              <div>
                <img
                  src={Chart}
                  width="300px"
                  className="img-responsive"
                  alt="Image"
                />
              </div>{" "}
            </span>

            <span className="col-sm-4 text-center">
              <h3 style={{ marginTop: "150px" }}>Data Scientist</h3>
              <br />
              <h5>Tableau</h5>
              <h5>Excel</h5>
              <h5>R Programing</h5>
              <h5>Python</h5>
              <h5>Machine Learning</h5>
            </span>
          </div>
        </div>
        <br />
        <br />
        <div
          className="container text-center"
          style={{ borderTop: "1px solid gray" }}
        >
          <h3>Hobbies</h3>
          <div className="row">
            <span className="col-sm-5 text-center">
              <img
                src={Bike}
                height="280px"
                alt="1"
                className="img-responsive"
              />
            </span>
            <span className="col-sm-5 ">
              <img
                src={Sing}
                alt="2"
                height="250px"
                className="img-responsive"
              />
            </span>
          </div>
        </div>

        <br />

        <div
          className="jumbotron text-center text-black text-center"
          style={{
            backgroundColor: "#222222",
            fontSize: "20px",
            marginTop: "60px",
          }}
        >
          <h2 style={{ fontFamily: "robota", color: "white" }}>Skills</h2>
          <div className="row">
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>Python</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix ">
                <p>C++</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>C</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>Data Science</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>Machine Learning</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>HTML</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>Javascript</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>PHP</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>Bootstrap</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>React</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>Kotlin</p>
              </span>
            </div>
            <div className="col-sm-4">
              <span className="badge badge-success width_fix">
                <p>Jira Cloud</p>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
