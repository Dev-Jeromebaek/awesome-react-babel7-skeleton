import React, { Component, Fragment } from 'react';

import graphData from '../data/getGraphData.json';

import Bar from '../types/Bar';
import Line from '../types/Line';
import Pie from '../types/Pie';

class Grid extends Component {
  state = {
    gridSize: {}
  };
  tempArea = [];
  afterGrid = {
    x: 0,
    y: 0
  };
  gridSize = {
    w: 0,
    h: 1,
    x: 0,
    y: 0
  };

  passOnGraphData = id => {
    return graphData.graph_data.filter(info => info.graphId === id);
  };

  setDataGrid = (w, collectionId) => {
    console.log(w);
    console.log(collectionId);
    console.log(this.gridSize);
    if (collectionId === 1) {
      // this.setState({
      //   gridSize: this.gridSize
      // });
    }
    //   this.afterGrid = {
    //     x: w === 1 ? 1 : 2
    //   };
    // } else {
    //   this.setLayout(w);
    // }
    // console.log(this.gridSize);
    // collectionId === 1
    //   ?
    //   :
    // return this.state.gridSize;
  };

  setLayout = w => {
    // if (w === 1) {
    //   console.log(this.tempArea.length);
    //   console.log(this.afterGrid);
    // } else {
    //   console.log(this.afterGrid);
    // }
  };

  createChartList = id => {
    // 1개의 dashboard에 포함된 graphCollection 정보(배열)
    const { graphCollection } = graphData.dashboard_list[id - 1];

    let chartList = [];
    graphCollection.forEach(ct_info => {
      if (ct_info.graphDetailType === 'BAR_GRAPH') {
        chartList.push(
          <Bar
            graphInfo={this.passOnGraphData(ct_info.graphId)}
            layoutKey={ct_info.collectionId}
            gridSize={this.setDataGrid(1, ct_info.collectionId)}
            key={ct_info.collectionId}
          />
        );
      }
      if (ct_info.graphDetailType === 'PIE_GRAPH') {
        chartList.push(
          <Pie
            graphInfo={this.passOnGraphData(ct_info.graphId)}
            layoutKey={ct_info.collectionId}
            gridSize={this.setDataGrid(1, ct_info.collectionId)}
            key={ct_info.collectionId}
          />
        );
      }
      if (ct_info.graphDetailType === 'LINEAR_GRAPH') {
        chartList.push(
          <Line
            graphInfo={this.passOnGraphData(ct_info.graphId)}
            layoutKey={ct_info.collectionId}
            gridSize={this.setDataGrid(2, ct_info.collectionId)}
            key={ct_info.collectionId}
          />
        );
      }
    });
    return chartList;
  };

  render() {
    return <Fragment>{this.createChartList(this.props.dashboardId)}</Fragment>;
  }
}

export default Grid;
