import React, { Component } from "react";
import { Card, Button } from "reactstrap";
class Body extends Component {
  render() {
    return (
      <div className="container">
        <Button color="danger">Danger!</Button>
        <Card>a</Card>
      </div>
    );
  }
}

export default Body;
