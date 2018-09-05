import React, { Fragment } from "react";
import styled from "styled-components";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItemText from "@material-ui/core/ListItemText";
import DialogActions from "@material-ui/core/DialogActions";
import Avatar from "@material-ui/core/Avatar";

import Loader from "../../components/loader/loader";
import { PrimaryButton } from "../../components/buttons/buttons";

const ContentSection = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 0.5rem;
`;

const Title = styled(DialogTitle)`
  && {
    padding: 1rem 0.5rem;
    text-align: center;
  }
`;

const JokeDialog = styled(Dialog).attrs({
  classes: { paper: "Content" }
})`
  .Content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 12rem;
    width: 100%;
  }
`;

const ActionButton = styled(PrimaryButton)`
  width: 10rem;
`;

const ActionFooter = styled(DialogActions)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

const CategoryDialog = ({
  joke,
  category,
  iconUrl,
  onClose,
  open,
  selectedValue,
  isLoading,
  hasLoaded,
  hasError,
  handleLoadCategoryJokes,
  ...otherProps
}) => (
  <JokeDialog onClose={onClose} open={open} {...otherProps}>
    <Title>
      {isLoading
        ? "Loading category joke..."
        : category
          ? category.toUpperCase()
          : ""}
    </Title>
    <ContentSection>
      {isLoading ? (
        <Loader />
      ) : hasLoaded && hasError ? (
        "Error loading category joke"
      ) : (
        <Fragment>
          <Avatar src={iconUrl} />
          <ListItemText primary={joke} />
        </Fragment>
      )}
    </ContentSection>
    <ActionFooter>
      <ActionButton
        inverted
        onClick={handleLoadCategoryJokes}
        value={category}
        color="primary"
      >
        Next Joke
      </ActionButton>
      <ActionButton inverted onClick={onClose} color="primary">
        Close
      </ActionButton>
    </ActionFooter>
  </JokeDialog>
);

export default CategoryDialog;
