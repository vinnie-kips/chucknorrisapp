import React from "react";
import styled from "styled-components";
import { arrayOf, string, bool } from "prop-types";

import CategoryList from "./category-list/category-list";
import Loader from "../components/Loader/Loader";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = ({ categories, isLoading, hasError }) => (
  <DashboardContainer>
    {isLoading ? (
      <Loader />
    ) : hasError ? (
      "Error Loading categories"
    ) : (
      categories.length && <CategoryList categories={categories} />
    )}
  </DashboardContainer>
);

Dashboard.defaultProps = {
  categories: []
};

Dashboard.propTypes = {
  categories: arrayOf(string),
  isLoading: bool,
  hasError: bool
};

export default Dashboard;
