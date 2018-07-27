import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import graphData from '../../components/chart/data/getGraphData.json';

import Bar from '../../components/chart/types/Bar';
import Line from '../../components/chart/types/Line';
import Pie from '../../components/chart/types/Pie';

class Dashboard extends Component {
  createChartList = id => {
    // console.log(graphData);
    // console.log(graphData.dashboard_list);
    // console.log(graphData.graph_data);
    // 1개의 dashboard에 포함된 graphCollection 정보(배열)
    const { graphCollection } = graphData.dashboard_list[id - 1];
    // console.log(graphCollection);

    // const { graph_data } = graphData;

    let chartList = [];

    graphCollection.forEach(ct_info => {
      if (ct_info.graphDetailType === 'BAR_GRAPH')
        chartList.push(
          <Bar graphId={ct_info.graphId} key={ct_info.collectionId} />
        );
      if (ct_info.graphDetailType === 'PIE_GRAPH')
        chartList.push(
          <Pie graphId={ct_info.graphId} key={ct_info.collectionId} />
        );
      if (ct_info.graphDetailType === 'LINEAR_GRAPH')
        chartList.push(
          <Line graphId={ct_info.graphId} key={ct_info.collectionId} />
        );
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
