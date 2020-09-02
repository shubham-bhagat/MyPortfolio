import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbarCom/navbar";
import Abouts from "./components/About.jsx";
import Project from "./components/projects.jsx";
import Resume from "./components/resume.jsx";
import Selection from "./components/selection.jsx";
import Footer from "./components/footer.jsx";
import NotFound from "./components/pagenotfound.jsx";

import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/About" component={Abouts} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Project} />
            <Route path="/selection" component={Selection} />
            <Route path="linkdinurl" component={URL} />
            {/* <Route Path="/pagenotfound" component={NotFound}/> */}
            {/* <Route path="/" exact component={Selection} /> */}
            <Redirect to="/selection" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
