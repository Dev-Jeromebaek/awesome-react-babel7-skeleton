import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import { Card } from '../card/Card';

import {
  // optionSimplePie,
  optionDonutPie,
  drawListenerPie
  // createListenerPie
} from '../variables/PieOptionSet';

class PieSet extends Component {
  static defaultProps = {
    data: []
  };
  state = {
    dataPie: {
      // labels: ['60%', '10%', '30%'],
      series: [20, 10, 30]
    },
    legendPie: {
      names: ['blue', 'red', 'yellow'],
      types: ['info', 'danger', 'warning']
    }
  };

  createLegend = json => {
    let legend = [];

    for (let i = 0; i < json['names'].length; i++) {
      let type = 'fa fa-circle text-' + json['types'][i];
      legend.push(<i className={type} key={i} />);
      legend.push(' ');
      legend.push(json['names'][i]);
    }
    return legend;
  };

  render() {
    console.log(this.props);
    return (
      <div className="col-md-4">
        <Card
          statsIcon="fa fa-history"
          title="차트 이름"
          category="상세 설명"
          stats="Updated 10 minutes ago"
          content={
            <div id="chartPreferences" className="ct-chart ct-perfect-fourth">
              <ChartistGraph
                data={this.state.dataPie}
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

export default PieSet;
