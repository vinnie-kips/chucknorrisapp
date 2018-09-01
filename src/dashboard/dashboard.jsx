import React from "react";
import styled from "styled-components";
import { func, arrayOf, string } from "prop-types";

import { PrimaryButton } from "../components/buttons/buttons";
import CategoryList from "./category-list/category-list";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = ({ categories, loadCategories }) => (
  <DashboardContainer>
    <PrimaryButton onClick={loadCategories}>Search For Jokes</PrimaryButton>
    <CategoryList categories={categories} />
  </DashboardContainer>
);

Dashboard.propTypes = {
  loadCategories: func,
  categories: arrayOf(string)
};

export default Dashboard;
