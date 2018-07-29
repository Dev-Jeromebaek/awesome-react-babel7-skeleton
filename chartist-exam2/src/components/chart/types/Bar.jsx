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
    updateTime: 0
  };
  dataBar = {
    labels: [],
    series: []
  };
  legendBar = {
    names: [],
    types: ['info', 'danger', 'warning', 'grape', 'grass', 'sea']
  };

  bindPassedGraphData = () => {
    const { graphDataList, baseType, dataType } = this.props.graphInfo[0];
    let tempArr = [];

    graphDataList.forEach(info => {
      tempArr.push(info.y);
      this.dataBar.labels.push(info.x.split(' ~ ')[1]);
    });
    console.log(this.dataBar);

    this.legendBar.names.length = 0;
    this.legendBar.names.push(
      [],
      [],
      [],
      // ['X축: ' + baseType.title + ' / Y축: ' + dataType + '(단위: 100)']
      ['X축: ' + baseType.title + ' / Y축: ' + dataType]
    );

    // 1. 각각 x 값마다 색상 다르게 그래프 그리기.
    for (let i = 0; i < tempArr.length; i++) {
      let newArr = [];
      for (let j = 0; j < tempArr.length; j++) {
        newArr.push(i === j ? tempArr[i] : 0);
      }
      this.dataBar.series.push(newArr);
    }

    // 2. 같은 색상으로 그래프 그리기
    // this.dataBar.series.push(tempArr);
    return this.dataBar;
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
    const { graphName, graphDescription } = this.props.graphInfo[0];
    return (
      <div className="col-md-4">
        {/* <div className="bg-white" key={this.props.layoutKey}> data-grid={}*/}
        <Card
          statsIcon="fa fa-history"
          id="chartHours"
          title={graphName}
          category={graphDescription}
          updateTime={this.state.updateTime}
          start={Date.now()}
          content={
            <div className="ct-chart">
              <ChartistGraph
                data={this.bindPassedGraphData()}
                type="Bar"
                options={optionsBar}
                responsiveOptions={responsiveBar}
                listener={drawListenerBar}
              />
            </div>
          }
          legend={
            <div className="legend">{this.createLegend(this.legendBar)}</div>
          }
        />
      </div>
    );
  }
}

export default Bar;
