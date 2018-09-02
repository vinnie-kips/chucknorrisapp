import { all } from "redux-saga/effects";

import categorySaga from "../pages/dashboard/saga";
import categoryRandomJoke from "../pages/category/saga";

export default function* rootSaga() {
  yield all([...categorySaga(), ...categoryRandomJoke()]);
}
