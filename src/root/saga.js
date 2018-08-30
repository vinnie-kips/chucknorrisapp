import { all } from "redux-saga/effects";

import categorySaga from "../dashboard/sagas";

export default function* rootSaga() {
  yield all([...categorySaga()]);
}
