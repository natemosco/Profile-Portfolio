import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";

import Home from "./route-pages/Home";
import World from "./features/world/World";

function App(props) {
  return (
    <div>
      <World></World>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
