import React from "react";
import { func } from "prop-types";

import PrimaryButton from "../components/button/button";

const Dashboard = ({ loadCategories }) => (
  <PrimaryButton onClick={loadCategories}>Search For Jokes</PrimaryButton>
);

Dashboard.propTypes = {
  loadCategories: func
};

export default Dashboard;
