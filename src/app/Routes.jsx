import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard-container";
import Category from "../pages/category/category-container";

const NoMatch = () => <div>Route Not Found</div>;

const AppRoutes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/category/:category" component={Category} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
