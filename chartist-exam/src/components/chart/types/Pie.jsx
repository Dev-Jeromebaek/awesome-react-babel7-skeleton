import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import { Card } from '../card/Card';

import {
  // optionSimplePie,
  optionDonutPie,
  drawListenerPie
  // createListenerPie
} from '../variables/PieOptionSet';

class Pie extends Component {
  static defaultProps = {
    data: []
  };
  state = {
    dataPie: {
      // labels: ['60%', '10%', '30%'],
      // series: [20, 10, 30, 40, 30, 20]
      series: []
    },
    legendPie: {
      names: ['blue', 'red', 'yellow', 'a', 'b', 'c'],
      // types: ['info', 'warning', 'warning']
      // names: ['blue', 'red', 'yellow'],
      types: ['info', 'danger', 'warning', 'grape', 'grass', 'sea']
    },
    gridLayout: {
      w: this.props.gridSize.w,
      h: 1,
      x: 0,
      y: 0
    }
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
    return (
      <div className="col-md-8">
        {/* <div className="bg-white" key={this.props.layoutKey}> data-grid={}*/}
        <Card
          statsIcon="fa fa-history"
          title="차트 이름"
          category="상세 설명"
          stats="Updated 10 minutes ago"
          content={
            <div id="chartPreferences" className="ct-chart">
              <ChartistGraph
                data={this.bindPassedGraphData()}
                type="Pie"
                options={optionDonutPie}
                listener={drawListenerPie}
              />
            </div>
          }
          legend={
            <div className="legend">
              {this.createLegend(this.state.legendPie)}
            </div>
          }
        />
      </div>
    );
  }
}

export default Pie;
