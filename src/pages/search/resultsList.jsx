import React from "react";
import styled from "styled-components";

import Card from "../../components/card/card";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin: 0.5rem 0;
`;

const ResultsList = ({ results }) => (
  <ListContainer>
    <Heading>Search Results</Heading>
    {results.length ? (
      results.map((result, index) => (
        <Card key={index} content={result.value} iconUrl={result.icon_url} />
      ))
    ) : (
      <Card content={"No results found"} />
    )}
  </ListContainer>
);

export default ResultsList;
