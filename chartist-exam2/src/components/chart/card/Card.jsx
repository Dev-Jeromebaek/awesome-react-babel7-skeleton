import React, { Component } from 'react';

import DropDown from '../dropdown/Dropdown';

export class Card extends Component {
  state = {
    minutes: 0
  };

  componentDidMount() {
    // 테스트를 위해 3초로 변경 원래 값은 1분
    this.timer = setInterval(this.minTimer, 3000);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps !== this.props) {
  //     this.setState({ minutes: 0 });
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  minTimer = () => {
    this.setState({ minutes: this.state.minutes + 1 });
  };

  handleRefresh = () => {
    clearInterval(this.timer);
    this.setState({
      minutes: 0
    });
    // 테스트를 위해 3초로 변경 원래 값은 1분
    this.timer = setInterval(this.minTimer, 3000);
  };
  render() {
    let minutes = this.state.minutes;
    console.log(minutes);
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
            <div className="legend">{this.props.legend}</div>
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
