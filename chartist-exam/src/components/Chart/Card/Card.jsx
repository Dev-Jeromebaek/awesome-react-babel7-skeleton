import React, { Component } from "react";

import DropDown from "../Dropdown/Dropdown";

export class Card extends Component {
  handleRefresh = () => {
    alert("refresh");
  };
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h4 className="title state d-flex justify-content-between">
            {this.props.title}
            <div className="d-flex">
              <DropDown />
              <i
                className={this.props.statsIcon}
                style={{ cursor: "pointer" }}
                onClick={this.handleRefresh}
              />
            </div>
          </h4>
          <p className="category">{this.props.category}</p>
        </div>
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}

          <div className="footer">
            {this.props.legend}
            {this.props.stats != null ? <hr /> : ""}
            <div className="stats">
              <i className={this.props.statsIcon} /> {this.props.stats}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
