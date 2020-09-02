import React, { Component } from "react";

import PDF from "./navbarCom/ShubhamBhagat_CV.pdf";

class Resume extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <iframe src={PDF} style={{ width: "100%", height: "748px" }} />
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
