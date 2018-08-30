import { connect } from "react-redux";

import Dashboard from "./dashboard";
import { loadCategories } from "./actions";

const mapStateToProps = state => ({
  categories: state.categories.data
});

const mapDispatchTpProps = dispatch => ({
  loadCategories() {
    dispatch(loadCategories());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchTpProps
)(Dashboard);
