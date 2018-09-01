import React from "react";
import styled from "styled-components";
import { func, arrayOf, string, bool } from "prop-types";

import { PrimaryButton } from "../components/buttons/buttons";
import CategoryList from "./category-list/category-list";
import Loader from "../components/Loader/Loader";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = ({ categories, isLoading, hasError, loadCategories }) => (
  <DashboardContainer>
    <PrimaryButton onClick={loadCategories}>Search For Jokes</PrimaryButton>
    {isLoading ? (
      <Loader />
    ) : hasError ? (
      "Error Loading categories"
    ) : (
      <CategoryList categories={categories} />
    )}
  </DashboardContainer>
);

Dashboard.propTypes = {
  loadCategories: func,
  categories: arrayOf(string),
  isLoading: bool,
  hasError: bool
};

export default Dashboard;
