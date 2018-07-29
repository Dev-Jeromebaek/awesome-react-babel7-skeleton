import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Grid from '../../components/chart/grid/Grid';

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Grid dashboardId={1} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
