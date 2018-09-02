import React from "react";
import styled from "styled-components";

import Loader from "../../components/loader/loader";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  height: 3rem;
  width: 3rem;
`;

const Category = ({
  category,
  joke,
  iconUrl,
  isLoading,
  hasError,
  hasLoaded
}) => (
  <CategoryContainer>
    {isLoading ? (
      <Loader />
    ) : hasError ? (
      "Error Loading Joke"
    ) : (
      <ContentContainer>
        <Icon src={iconUrl} />
        <div>Category: {category}</div>
        <div>Joke: {joke}</div>
      </ContentContainer>
    )}
  </CategoryContainer>
);
export default Category;
