import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";

import Header from "./components/header/Header";

const routerEx = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default routerEx;
