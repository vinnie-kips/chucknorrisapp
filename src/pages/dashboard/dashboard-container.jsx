import { connect } from "react-redux";

import Dashboard from "./dashboard";
import { loadCategories } from "./actions";
import { loadCategoryRandomJoke } from "../view-category/actions";
import preLoad from "../../higher-order-components/pre-load";

const mapStateToProps = state => {
  const { categories } = state;
  return {
    categories: categories.categoryList || [],
    isLoading: categories.isLoading,
    hasError: categories.hasError.status,
    hasLoaded: categories.hasLoaded
  };
};

const mapDispatchTpProps = dispatch => ({
  onLoad() {
    dispatch(loadCategories());
  },

  handleLoadCategoryJokes(event) {
    const { value } = event.currentTarget;
    dispatch(loadCategoryRandomJoke(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(preLoad(Dashboard));
