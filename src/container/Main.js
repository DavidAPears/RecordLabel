import React, { Component } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
