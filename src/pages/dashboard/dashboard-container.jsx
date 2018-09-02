import { connect } from "react-redux";

import Dashboard from "./dashboard";
import { loadCategories } from "./actions";
import { loadCategoryRandomJokes } from "../category/actions";
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

  handleCategory(history, event) {
    const { value } = event.currentTarget;
    dispatch(loadCategoryRandomJokes(value));
    history.push(`category/${value}`);
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,

  onLoad() {
    !stateProps.hasLoaded && dispatchProps.onLoad();
  },

  handleCategory(event) {
    dispatchProps.handleCategory(ownProps.history, event);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchTpProps,
  mergeProps
)(preLoad(Dashboard));
