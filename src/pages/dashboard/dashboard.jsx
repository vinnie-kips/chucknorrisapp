import React from "react";
import styled from "styled-components";
import { arrayOf, string, bool, func } from "prop-types";

import CategoryList from "./category-list/category-list";
import Loader from "../../components/loader/loader";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = ({ categories, isLoading, hasError, handleCategory }) => (
  <DashboardContainer>
    {isLoading ? (
      <Loader />
    ) : hasError ? (
      "Error Loading categories"
    ) : (
      categories.length && (
        <CategoryList categories={categories} handleCategory={handleCategory} />
      )
    )}
  </DashboardContainer>
);

Dashboard.defaultProps = {
  categories: []
};

Dashboard.propTypes = {
  categories: arrayOf(string),
  isLoading: bool,
  hasError: bool,
  handleCategory: func
};

export default Dashboard;
