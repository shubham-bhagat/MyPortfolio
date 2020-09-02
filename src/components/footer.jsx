import React, { Component } from "react";

import Linkdin from "./images/linkf.svg";
import Github from "./images/github.svg";
import EmailImg from "./images/email.svg";

const gmailLink = "mailto: shubhambhagat7070@gmail.com";
const githubLink = "https://github.com/shubham-bhagat";
const LinkndinLink = "https://www.linkedin.com/in/shubham-bhagat-3822a4150/";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer
          className="page-footer font-small cyan darken-5"
          style={{ marginTop: "35px", backgroundColor: "lightsalmon" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="text-center">
                  <a className="" href={LinkndinLink} target="_blank">
                    <img src={Linkdin} className=" white-text " height="50" />
                  </a>

                  <a className="" href={githubLink} target="_blank">
                    <img src={Github} className=" white-text " height="50" />
                  </a>

                  <a href={gmailLink} target="_blank">
                    <img src={EmailImg} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            <strong>© Shubham Bhagat</strong>
            {/* <Link to="https://mdbootstrap.com/"> MDBootstrap.com</Link> */}
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
