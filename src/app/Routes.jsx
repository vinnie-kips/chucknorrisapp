import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../dashboard/dashboard-container";

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="*" render={() => <div>Route Not Found</div>} />
    </Switch>
  </Router>
);

export default AppRoutes;
