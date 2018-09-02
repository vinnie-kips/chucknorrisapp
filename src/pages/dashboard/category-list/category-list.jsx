import React from "react";
import styled from "styled-components";

import { PrimaryButton } from "../../../components/buttons/buttons";
import { arrayOf, string } from "prop-types";

const ListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Category = styled(PrimaryButton)`
  && {
    margin: 1rem;
    width: 8rem;
  }
`;

const Heading = styled.h1``;

const CategoryList = ({ categories, handleCategory }) => (
  <ListContainer>
    <Heading>Jokes Categories</Heading>
    <CategoryContainer>
      {categories.map((category, key) => (
        <Category onClick={handleCategory} key={key} value={category}>
          {category}
        </Category>
      ))}
    </CategoryContainer>
  </ListContainer>
);

CategoryList.propTypes = {
  categories: arrayOf(string).isRequired
};

export default CategoryList;
