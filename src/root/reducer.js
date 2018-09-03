import { combineReducers } from "redux";

import categories from "../pages/dashboard/reducer";
import randomCategoryJoke from "../pages/view-category/reducer";
import searchJokes from "../pages/search/reducer";

const rootReducer = combineReducers({
  categories,
  randomCategoryJoke,
  searchJokes
});

export default rootReducer;
