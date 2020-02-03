import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import App from "./Components/App";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" exact component={App} />
          <Route path="/" exact component={App} />
          <Route path="/login" exact component={SignIn} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
