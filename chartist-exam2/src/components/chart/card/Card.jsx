import React, { Component } from 'react';

import DropDown from '../dropdown/Dropdown';

export class Card extends Component {
  state = {
    minutes: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.intervalTimer, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  intervalTimer = () => {
    console.log(this.state.minutes);
    this.setState({ minutes: this.state.minutes + 1 });
  };

  handleRefresh = () => {
    clearInterval(this.timer);
    this.setState({
      minutes: 0
    });
    this.timer = setInterval(this.intervalTimer, 60000);
  };
  render() {
    let minutes = this.state.minutes;

    return (
      <div className={'card' + (this.props.plain ? ' card-plain' : '')}>
        <div className={'header' + (this.props.hCenter ? ' text-center' : '')}>
          <h4 className="title state d-flex justify-content-between">
            {this.props.title}
            <div className="d-flex">
              <DropDown />
              <i
                className={this.props.statsIcon}
                style={{ cursor: 'pointer' }}
                onClick={this.handleRefresh}
              />
            </div>
          </h4>
          <p className="category">{this.props.category}</p>
        </div>
        <div className="content">
          {this.props.content}

          <div className="footer">
            {this.props.legend}
            {/* {this.props.updateStats != null ? <hr /> : ''} */}
            <hr />
            <div className="stats">
              <i className={this.props.statsIcon} />&nbsp;
              {/* '업데이트된지'{minutes}'분 지났습니다.' */}
              Updated '{minutes}' minutes ago
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
