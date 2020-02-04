import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect } from "react-router-dom";
const jwt = require("jsonwebtoken");

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url1: "",
      url2: "",
      username: "",
      page: false
    };
  }

  input1 = url => {
    if (
      url.slice(0, 8) === "https://" ||
      url.slice(0, 7) === "http://" ||
      url.slice(0, 4) === "http"
    ) {
      this.setState({ url1: url });
    } else {
      let url1 = "http://" + url;
      this.setState({ url1: url1 });
    }
  };

  input2 = url => {
    if (
      url.slice(0, 8) === "https://" ||
      url.slice(0, 7) === "http://" ||
      url.slice(0, 4) === "http"
    ) {
      this.setState({ url2: url });
    } else {
      let url2 = "http://" + url;
      this.setState({ url2: url2 });
    }
  };

  UNSAFE_componentWillMount() {
    var token = reactLocalStorage.get("token");
    if (token) {
      var data = jwt.decode(token);
      this.setState({ username: data.username });
      this.setState({ page: true });
    } else {
      this.setState({ page: false });
    }
  }

  render() {
    console.log(window.screen.height);
    if (!this.state.page) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="App">
        <Header
          username={this.state.username}
          input1={this.input1}
          input2={this.input2}
        />
        <div className="mainBody">
          <iframe
            title="tex intput one"
            className="textBox-1"
            src={this.state.url1}
            style={{
              width: "-webkit-fill-available",
              height: window.screen.height-146
            }}
          ></iframe>
          <iframe
            title="text input two"
            className="textBox-2"
            src={this.state.url2}
            style={{
              width: "-webkit-fill-available",
              height: window.screen.height-146
            }}
          ></iframe>
        </div>
      </div>
    );
  }
}

export default App;
