import { connect } from "react-redux";

import Dashboard from "./dashboard";
import { loadCategories } from "./actions";
import preLoad from "../../higher-order-components/pre-load";

const mapStateToProps = state => {
  const { categories } = state;
  return {
    categories: categories.data || [],
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
