import React, { Component, Fragment } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Dropdown extends Component {
  state = {
    dropdownOpen: false,
    cycleTitle: '갱신주기 설정'
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  hi = e => {
    console.log('dd');
  };
  handleSetCycle = e => {
    e.stopPropagation();
    this.setState({
      cycleTitle: e.target.value
    });
    let cycleTime = e.target.value.split(' ')[0];
    if (cycleTime === '1' || cycleTime === '갱신주기') cycleTime = '60';
    const { setCycle } = this.props;
    setCycle(parseInt(cycleTime, 10));
  };

  render() {
    return (
      <Fragment>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret size="sm" outline color="info">
            {this.state.cycleTitle}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={this.handleSetCycle}
              value="10 minutes"
              onMouseDown={e => {
                e.stopPropagation();
              }}
            >
              10 minutes
            </DropdownItem>
            <DropdownItem
              onClick={this.handleSetCycle}
              value="30 minutes"
              onMouseDown={e => {
                e.stopPropagation();
              }}
            >
              30 minutes
            </DropdownItem>
            <DropdownItem
              onClick={this.handleSetCycle}
              value="1 hours"
              onMouseDown={e => {
                e.stopPropagation();
              }}
            >
              1 hours
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem
              onClick={this.handleSetCycle}
              value="갱신주기 설정"
              onMouseDown={e => {
                e.stopPropagation();
              }}
            >
              set initial
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        &nbsp;&nbsp;&nbsp;
      </Fragment>
    );
  }
}

export default Dropdown;
