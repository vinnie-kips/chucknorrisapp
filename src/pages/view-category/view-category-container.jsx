import { connect } from "react-redux";

import CategoryDialog from "./view-category";
import preLoad from "../../higher-order-components/pre-load";
import { loadCategoryRandomJokes } from "./actions";

const mapStateToProps = state => {
  const { data, isLoading, hasError, hasLoaded } = state.randomCategoryJoke;

  return {
    categories: state.categories.categoryList || [],
    category: data.category,
    joke: data.joke,
    iconUrl: data.iconUrl,
    isLoading: isLoading,
    hasError: hasError.status,
    hasLoaded: hasLoaded
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCategoryJoke() {
    dispatch(loadCategoryRandomJokes("dev"));
  },

  onLoad() {
    dispatch(loadCategoryRandomJokes("dev"));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(preLoad(CategoryDialog));
