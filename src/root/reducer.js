import { combineReducers } from "redux";

import categories from "../dashboard/reducer";

const rootReducer = combineReducers({
  categories
});

export default rootReducer;
