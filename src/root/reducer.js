import { combineReducers } from "redux";

import categories from "../pages/dashboard/reducer";
import randomCategoryJoke from "../pages/category/reducer";

const rootReducer = combineReducers({
  categories,
  randomCategoryJoke
});

export default rootReducer;
