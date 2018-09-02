import { combineReducers } from "redux";

import categories from "../pages/dashboard/reducer";

const rootReducer = combineReducers({
  categories
});

export default rootReducer;
