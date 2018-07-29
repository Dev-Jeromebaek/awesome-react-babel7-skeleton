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
  dataLine = {
    labels: [
      '9:00AM',
      '12:00AM',
      '3:00PM',
      '6:00PM',
      '9:00PM',
      '12:00PM',
      '3:00AM',
      '6:00AM'
    ],
    series: [
      [287, 385, 490, 492, 554, 586, 698, 695],
      [67, 152, 143, 240, 287, 335, 435, 437],
      [23, 113, 67, 108, 190, 239, 307, 308]
    ]
  };
  legendLine = {
    names: ['가', '나', '다'],
    types: ['info', 'danger', 'warning', 'grape', 'grass', 'sea']
  };

  bindPassedGraphData = () => {
    // const {
    //   graphInfo,
    //   graphInfo: { graphDataList }
    // } = this.props;
    // console.log(graphInfo);
    // console.log(graphDataList);
    // graphDataList.map(info => {
    //   this.dataLine.series.push(info.y);
    //   this.legendLine.names.push(info.x);
    // });
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
        {/* <div className="bg-white" key={this.props.layoutKey}> data-grid={this.state.gridLayout}*/}
        <Card
          statsIcon="fa fa-history"
          id="chartHours"
          title={graphName}
          category={graphDescription}
          stats="Updated 3 minutes ago"
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
