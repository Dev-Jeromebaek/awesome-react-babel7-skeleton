import React, { Component } from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";

export class Card extends Component {
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h4 className="title state d-flex justify-content-between">
            {this.props.title}
            <div className="d-flex">
              <ButtonToolbar>
                <DropdownButton title="갱신주기 설정" id="dropdown-size-medium">
                  <MenuItem eventKey="1">10 minutes</MenuItem>
                  <MenuItem eventKey="2">30 minutes</MenuItem>
                  <MenuItem eventKey="3">1 hours</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">set initial</MenuItem>
                </DropdownButton>
              </ButtonToolbar>{" "}
              <i
                className={this.props.statsIcon}
                style={{ cursor: "pointer" }}
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
