import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./navbarCom/navbar.css";

import Profile from "./images/profile.jpg";
import EcommerceImg from "./images/ecomImg.png";
import DataImg from "./images/dataImg.png";

class FirstSelection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron move ">
          <div className="container-fluid row  ">
            <span className="col-sm-12 text-center">
              <img
                height="400"
                src={Profile}
                style={{ boxShadow:"2px 2px 12px gray",display: "inline-block"}}
                className="img-responsive back rounded-circle "
                alt=""
              />
            </span>
            <span className=" col-sm-12   text-center" >
              <p
                className=" text-top back"
                style={{
                  fontSize: "25px",
                  color:"Brown",
                  
                transition:"all 1s linear",
                  marginTop: "0px",
                }}
              >
              <b>
                  A Web Designer and a Data Scientist.
                </b>
              </p >
              <p style={{fontSize:"25px",color:"rgb(305, 42, 48)"}} className="back">Specialization in Data Science.</p>
              <p style={{fontSize:"25px",color:"rgb(355, 42, 42)"}} className="back">Also Love to do Web Designing in free time.</p>
         </span>
          </div>
        </div>

        <div
          className="container"
          style={{ borderTop: "3px solid lightgray" }}
        ></div>
        <div className="container bg-3  text-center appear">
          <br /> <h3>Some of my Work</h3>
          <br />
          <div className="row   ">
            <div className="col-sm-6 ">
              <Link className="text-black" to="/projects">
                <img
                  style={{ boxShadow: "8px 12px 12px 2px gray", width: "100%" }}
                  src={DataImg}
                  className="  img-responsive"
                  alt="Task1"
                />
              </Link>
              <h5>Sales Analysis</h5>
            </div>

            <div className="col-sm-6 text-center">
              <Link className="text-black" to="/projects">
                <img
                  style={{ boxShadow: "8px 12px 12px 2px gray", width: "100%" }}
                  src={EcommerceImg}
                  className="img-responsive"
                  alt="Task2"
                />
              </Link>
              <h5>E-Commerce</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FirstSelection;
