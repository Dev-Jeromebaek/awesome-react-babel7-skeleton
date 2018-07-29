import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import graphData from '../../components/chart/data/getGraphData.json';

import Bar from '../../components/chart/types/Bar';
import Line from '../../components/chart/types/Line';
import Pie from '../../components/chart/types/Pie';

class Dashboard extends Component {
  passOnGraphData = id => {
    return graphData.graph_data.filter(info => info.graphId === id);
  };

  setDataGrid = w => {
    // console.log(this.state.prev_row);
    // console.log(this.state.next_row);
    //   if (w === 1) {
    //     this.state.prev_row > 2
    //       ? this.setState({
    //         prev_row: w,
    //         gridLayout: {
    //           w: 0,
    //           y: this.state.gridLayout.y + w
    //         }
    //       })
    //       : this.setState({
    //           prev_row: this.state.prev_row + w,
    //           gridLayout: {
    //             x: this.state.gridLayout.x + w
    //           }
    //         });
    //   }

    //   if (w === 2) {

    //   }
    //   if (this.state.prev_row > 2)
    //     this.setState({
    //       grid_w: 0,
    //       gridLayout: {
    //         w: w,
    //         x: 0,
    //         y: 0
    //       }
    //     });
    //   // const { grid_}
    //   console.log('w : ' + w + ', h : ' + h);
    return this.state.gridLayout;
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
            gridSize={{ w: 1 }}
            key={ct_info.collectionId}
          />
        );
      }
      if (ct_info.graphDetailType === 'PIE_GRAPH') {
        chartList.push(
          <Pie
            graphInfo={this.passOnGraphData(ct_info.graphId)}
            layoutKey={ct_info.collectionId}
            gridSize={{ w: 1 }}
            key={ct_info.collectionId}
          />
        );
      }
      if (ct_info.graphDetailType === 'LINEAR_GRAPH') {
        chartList.push(
          <Line
            graphInfo={this.passOnGraphData(ct_info.graphId)}
            layoutKey={ct_info.collectionId}
            gridSize={{ w: 2 }}
            key={ct_info.collectionId}
          />
        );
      }
    });
    return chartList;
  };

  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>{this.createChartList(this.props.dashboardId)}</Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
