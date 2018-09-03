import { all } from "redux-saga/effects";

import categorySaga from "../pages/dashboard/saga";
import categoryRandomJoke from "../pages/view-category/saga";

export default function* rootSaga() {
  yield all([...categorySaga(), ...categoryRandomJoke()]);
}
