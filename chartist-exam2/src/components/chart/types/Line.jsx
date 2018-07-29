import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import { Card } from '../card/Card';

import {
  optionsLine,
  // optionsArea,
  responsiveLine,
  drawListenerLine
  // createListenerLine
} from '../variables/LineOptionSet';

class Line extends Component {
  state = {
    updateTime: 0
  };
  dataLine = {
    labels: [],
    series: []
  };
  legendLine = {
    names: [],
    types: ['info', 'danger', 'warning', 'grape', 'grass', 'sea']
  };

  bindPassedGraphData = () => {
    const { graphDataList, baseType, dataType } = this.props.graphInfo[0];
    let tempArr = [];

    graphDataList.map(info => {
      tempArr.push(info.y);
      this.dataLine.labels.push(info.x.split(' ~ ')[1]);
    });
    console.log(this.dataLine);

    this.legendLine.names.push([
      'X축: ' + baseType.title + ' / Y축: ' + dataType
      // 'X축: ' + baseType.title + ' / Y축: ' + dataType + '(단위: 100)'
    ]);

    // 2. 같은 색상으로 그래프 그리기
    this.dataLine.series.push(tempArr);

    // let sortArr = tempArr.sort((a, b) => {
    //   return a - b;
    // });
    // console.log(sortArr);
    // let low = sortArr[0] > 100 ? sortArr[0] - 100 : sortArr[0];
    // let high = sortArr[sortArr.length - 1] + 100;
    // this.optionsLine.low = low * 0.01;
    // this.optionsArea.low = low * 0.01;
    // this.optionsLine.low = low;
    // this.optionsArea.low = low;
    // this.optionsLine.high = high;
    // this.optionsArea.high = high;
    // this.optionsLine.high = high * 0.01;
    // this.optionsArea.high = high * 0.01;
    return this.dataLine;
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
          updateStats={'업데이트된지' + this.state.updateTime + ' 지났습니다.'}
          updateTime={this.state.updateTime}
          content={
            <div className="ct-chart">
              <ChartistGraph
                data={this.bindPassedGraphData()}
                type="Line"
                options={optionsLine}
                responsiveOptions={responsiveLine}
                listener={drawListenerLine}
              />
            </div>
          }
          legend={
            <div className="legend">{this.createLegend(this.legendLine)}</div>
          }
        />
      </div>
    );
  }
}

export default Line;
