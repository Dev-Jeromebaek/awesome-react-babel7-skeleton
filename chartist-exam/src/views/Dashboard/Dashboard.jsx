import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Container, Row, Col } from 'reactstrap';

import { Card } from '../../components/Chart/Card/Card';

import {
  dataPie,
  legendPie,
  // optionSimplePie,
  optionDonutPie,
  // listenerSimplePie,
  listenerPie
} from '../../variables/Pie';

import {
  dataLine,
  optionsLine,
  optionsArea,
  responsiveLine,
  legendLine,
  listenerLine
} from '../../variables/Line';
import {
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar,
  listenerBar
} from '../../variables/Bar';

class Dashboard extends Component {
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
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                title="차트 이름"
                category="상세 설명"
                stats="Updated 10 minutes ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph
                      data={dataPie}
                      type="Pie"
                      options={optionDonutPie}
                      listener={listenerPie}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="차트 이름"
                category="상세 설명"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataLine}
                      type="Bar"
                      options={optionsLine}
                      responsiveOptions={responsiveLine}
                      listener={listenerBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendLine)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="차트 이름"
                category="상세 설명"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataLine}
                      type="Line"
                      options={optionsLine}
                      responsiveOptions={responsiveLine}
                      listener={listenerLine}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendLine)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="차트 이름"
                category="상세 설명"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataLine}
                      type="Line"
                      options={optionsArea}
                      responsiveOptions={responsiveLine}
                      listener={listenerLine}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendLine)}</div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="차트 이름"
                category="상세 설명"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                      listener={listenerBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>
            {/* <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                title="차트 이름"
                category="상세 설명"
                stats="Updated 10 minutes ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph
                      data={dataPie}
                      type="Pie"
                      options={optionSimplePie}
                      responsiveOptions={responsiveOptionsSimplePie}
                      listener={listenerPie}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
