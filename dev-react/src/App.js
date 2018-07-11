import React, { Component, Fragment } from "react";
import "./App.css";
import Title from "./component/dashboard/Title";
import Body from "./component/dashboard/Body";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title />
        <Body />
      </Fragment>
    );
  }
}

export default App;
