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
  state = {
    updateCycle: 3600
  };
  dataPie = {
    series: []
  };
  legendPie = {
    names: [],
    types: ['info', 'danger', 'warning', 'grape', 'grass', 'sea']
  };

  bindPassedGraphData = () => {
    const { graphDataList } = this.props.graphInfo[0];

    graphDataList.forEach(info => {
      this.dataPie.series.push(info.count);
      this.legendPie.names.push(info.pieName);
    });
    return this.dataPie;
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
      <div className="col-md-8">
        {/* <div className="bg-white" key={this.props.layoutKey}> data-grid={}*/}
        <Card
          statsIcon="fa fa-history"
          title={graphName}
          category={graphDescription}
          // stats="Updated 10 minutes ago"
          updateTime={this.state.updateTime}
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
            <div className="legend">{this.createLegend(this.legendPie)}</div>
          }
        />
      </div>
    );
  }
}

export default Pie;
