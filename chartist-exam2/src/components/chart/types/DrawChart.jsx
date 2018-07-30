import React, { Component } from 'react';
// import ChartistGraph from 'react-chartist';

import { Card } from '../card/Card';
import { barUpdateFunction } from './chartUtil';
import Bar from './Bar';
// import {
//   optionsBar,
//   responsiveBar,
//   drawListenerBar
//   // createListenerBar
// } from '../variables/BarOptionSet';

class DrawChart extends Component {
  state = {
    setCycle: this.props.graphInfo[0].graphUpdateCycle - 3591,
    cycleTime: 1,
    // cycleTime: 3599000
    dataBar: {
      labels: [],
      series: []
    },
    legendBar: {
      names: [],
      types: ['info', 'danger', 'warning', 'grape', 'grass', 'sea']
    },
    minutes: 0
  };

  // componentDidUpdate(prevState) {
  //   console.log('componentDidUpdate');
  //   if (this.state.cycleTime !== prevState.cycleTime) {
  //     console.log('cycle값이 바뀜!', this.state.cycleTime);
  //   }
  // }

  // shouldComponentUpdate() {
  //   if (this.state.cycleTime === 1) {
  //     this.updateGraphData();
  //     return true;
  //   }
  //   return false;
  // }

  componentDidMount() {
    this.updateGraphData();
    this.updateTimer = setInterval(this.proceedCycleTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateTimer);
  }

  proceedCycleTimer = () => {
    this.setState(
      {
        cycleTime: this.state.cycleTime - 1,
        minutes: this.state.minutes + 1
      },
      () => {
        if (this.state.cycleTime === 1) {
          this.updateGraphData();
          return true;
        }
      }
    );
  };

  updateGraphData = () => {
    const { graphDataList, baseType, dataType } = this.props.graphInfo[0];
    console.log(this.props.graphInfo[0]);
    this.setState(
      barUpdateFunction(graphDataList, baseType, dataType, this.state.setCycle)
    );
    // 2. 같은 색상으로 그래프 그리기
    // this.dataBar.series.push(tempArr);
  };

  createLegend = json => {
    let legend = [];

    for (let i = 0; i < json['names'].length; i++) {
      let type = 'fa fa-circle text-' + json['types'][i];
      legend.push(<i className={type} key={i} />);
      legend.push(' ');
      legend.push(json['names'][i]);
      legend.push(' ');
    }
    return legend;
  };
  render() {
    const { graphName, graphDescription } = this.props.graphInfo[0];
    return (
      <div className="col-md-4">
        {/* <div className="bg-white" key={this.props.layoutKey}> data-grid={}*/}
        <Card
          statsIcon="fa fa-history"
          title={graphName}
          category={graphDescription}
          updateTime={this.state.graphUpdateCycle}
          content={
            <div className="ct-chart">
              <Bar
                rerender={this.state.cycleTime === this.state.setCycle}
                data={this.state.dataBar}
              />
            </div>
          }
          legend={this.createLegend(this.state.legendBar)}
          minutes={this.state.minutes}
        />
      </div>
    );
  }
}

export default DrawChart;
