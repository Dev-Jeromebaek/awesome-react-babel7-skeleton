import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import dashboardRoutes from "../../routes/dashboard";

class Dashboard extends Component {
  render() {
    return (
      <div id="main-panel" className="main-panel" ref="mainPanel">
        <Switch>
          {dashboardRoutes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path} to={prop.to} key={key} />;
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
