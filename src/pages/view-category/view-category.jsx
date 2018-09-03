import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItemText from "@material-ui/core/ListItemText";
import DialogActions from "@material-ui/core/DialogActions";

import Loader from "../../components/loader/loader";

const ContentSection = styled.section`
  display: flex;
  justify-content: center;
`;

const JokeDialog = styled(Dialog)`
  && {
    margin: auto;
    min-height: 50rem;
    width: 100%;
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
    <DialogTitle>
      {isLoading ? "Loading category joke..." : category}
    </DialogTitle>
    <ContentSection>
      {isLoading ? (
        <Loader />
      ) : hasLoaded && hasError ? (
        "Error loading category joke"
      ) : (
        <ListItemText primary={joke} />
      )}
    </ContentSection>
    <DialogActions>
      <Button
        onClick={handleLoadCategoryJokes}
        value={category}
        color="primary"
      >
        Next Joke
      </Button>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </JokeDialog>
);

export default CategoryDialog;
