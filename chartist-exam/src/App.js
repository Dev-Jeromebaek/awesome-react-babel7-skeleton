import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import indexRoutes from "./routes/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route to={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
