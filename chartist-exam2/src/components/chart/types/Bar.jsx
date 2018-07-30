import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import { Card } from '../card/Card';

import {
  optionsBar,
  responsiveBar,
  drawListenerBar
  // createListenerBar
} from '../variables/BarOptionSet';

class Bar extends Component {
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

  componentDidUpdate(prevState) {
    console.log('componentDidUpdate');
    if (this.state.cycleTime !== prevState.cycleTime) {
      console.log('cycle값이 바뀜!', this.state.cycleTime);
    }
  }

  shouldComponentUpdate() {
    // console.log('shouldComponentUpdate');
    console.log(this.state.cycleTime);
    if (this.state.cycleTime === 1) {
      this.updateGraphData();
      return true;
    }
    return false;
  }

  componentDidMount() {
    this.updateGraphData();
    this.updateTimer = setInterval(this.proceedCycleTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateTimer);
  }

  proceedCycleTimer = () => {
    this.setState({
      cycleTime: this.state.cycleTime - 1
      // minutes: this.state.minutes + 1
    });
  };

  updateGraphData = () => {
    const { graphDataList, baseType, dataType } = this.props.graphInfo[0];

    let names = [['X: ' + baseType.title], ['Y: ' + dataType]];
    let types = ['info', 'danger', 'warning', 'grape', 'grass', 'sea'];

    let tempArr = [];

    const labels = graphDataList.map(info => {
      tempArr.push(info.y);
      return info.x.split(' ~ ')[1];
    });

    // 1. 각각 x 값마다 색상 다르게 그래프 그리기.
    const series = tempArr.map((arr, index) => {
      let newArr = [];
      for (let j = 0; j < tempArr.length; j++) {
        newArr.push(index === j ? arr : 0);
      }
      return newArr;
    });

    this.setState(
      prevState => ({
        cycleTime: prevState.setCycle,
        dataBar: {
          labels,
          series
        },
        legendBar: {
          names: names,
          types: types
        }
      }),
      () => {
        console.log(this.state.dataBar);
        console.log(this.state.legendBar);
      }
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
    console.log(this.props);
    console.log(this.state.cycleTime);
    const { graphName, graphDescription } = this.props.graphInfo[0];
    return (
      <div className="col-md-4">
        {/* <div className="bg-white" key={this.props.layoutKey}> data-grid={}*/}
        <Card
          statsIcon="fa fa-history"
          id="chartHours"
          title={graphName}
          category={graphDescription}
          updateTime={this.state.graphUpdateCycle}
          content={
            <div className="ct-chart">
              <ChartistGraph
                data={this.state.dataBar}
                type="Bar"
                options={optionsBar}
                responsiveOptions={responsiveBar}
                listener={drawListenerBar}
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

export default Bar;
