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
  dataBar = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [
      [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
      [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
    ]
  };
  legendBar = {
    names: ['A', 'B'],
    types: ['info', 'danger', 'warning', 'grape', 'grass', 'sea']
  };

  bindPassedGraphData = () => {
    const { graphDataList } = this.props.graphInfo[0];
    console.log(graphDataList);
    let tempArr = [];
    // graphDataList.map(info => )
    // this.setState({
    // dataPie: {
    // series: this.state.dataPie.series.concat({ ...graphDataList.count })
    // }
    // });
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
