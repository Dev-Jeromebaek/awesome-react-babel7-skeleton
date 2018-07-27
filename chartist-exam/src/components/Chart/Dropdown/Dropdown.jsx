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
    cycleTitle: '갱신주기 설정',
    cycleOption: ['10 minutes', '30 minutes', '1 hours']
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  handleSetCycle = e => {
    e.stopPropagation();
    console.log(e.target.value);
    this.setState({
      cycleOption: e.target.value
    });
  };

  cycleOptionSet = () => {
    return this.state.cycleOption.forEach(cycle => (
      <DropdownItem onClick={this.handleSetCycle}>{cycle}</DropdownItem>
    ));
  };

  render() {
    return (
      <Fragment>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret size="sm" outline color="info">
            {this.state.cycleTitle}
          </DropdownToggle>
          <DropdownMenu>
            {this.cycleOptionSet()}
            <DropdownItem divider />
            <DropdownItem onClick={this.handleSetCycle}>
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
