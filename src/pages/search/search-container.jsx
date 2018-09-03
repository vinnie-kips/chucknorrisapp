import { connect } from "react-redux";

import Search from "./search";

const mapStateToProps = state => {
  const { data, isLoading, hasError, hasLoaded } = state.randomCategoryJoke;

  return {
    category: data.category,
    joke: data.joke,
    iconUrl: data.iconUrl,
    isLoading: isLoading,
    hasError: hasError.status,
    hasLoaded: hasLoaded
  };
};

const mapDispatchToProps = dipatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
