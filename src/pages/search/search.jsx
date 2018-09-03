import React from "react";
import styled from "styled-components";

import Loader from "../../components/loader/loader";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = ({ isLoading, hasError, hasLoaded }) => (
  <SearchContainer>
    {isLoading ? (
      <Loader />
    ) : hasError && hasLoaded ? (
      "Error Searching Jokes"
    ) : (
      <ContentContainer>
        <div>Search Results</div>
      </ContentContainer>
    )}
  </SearchContainer>
);
export default Category;
