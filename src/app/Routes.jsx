import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard-container";
import Category from "../pages/category/category-container";

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/category/:category" component={Category} />
      <Route path="*" render={() => <div>Route Not Found</div>} />
    </Switch>
  </Router>
);

export default AppRoutes;
