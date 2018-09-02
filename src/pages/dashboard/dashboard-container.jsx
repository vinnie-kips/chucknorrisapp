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
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onLoad() {
    !stateProps.hasLoaded && dispatchProps.onLoad();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchTpProps,
  mergeProps
)(preLoad(Dashboard));
