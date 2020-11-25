import React from "react";

import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import BillingCycle from "./BillingCycle";
import Home from "./Home";

const ScreensDashboardRoutes = (props) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={Home} />
      <Route path={`${path}/billing-cycle`} component={BillingCycle} />
      <Redirect from="*" to={path} />
    </Switch>
  );
};
