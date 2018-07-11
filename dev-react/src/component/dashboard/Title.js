import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" area-current="page">
            TMON
          </li>
        </ol>
      </nav>
    );
  }
}

export default Title;
