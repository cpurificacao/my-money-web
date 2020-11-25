import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import DashboardRoutes from "./Dashboard/Routes";

const ScreensRoutes = () => (
  <HashRouter hashType="slash">
    <Switch>
      <Route exact path="/">
        <div>
          <h1 style={{ color: "#fff" }}>Home</h1>
        </div>
      </Route>
      <Route path="/dashboard">
        <DashboardRoutes />
      </Route>
      <Route>
        <div>
          <h1 style={{ color: "#fff" }}>Error</h1>
        </div>
      </Route>
      <Redirect from="*" to="/error" />
    </Switch>
  </HashRouter>
);

export default ScreensRoutes;
