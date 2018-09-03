import { call, put, takeLatest } from "redux-saga/effects";

import {
  SEARCH_JOKES,
  searchJokesSucceeded,
  searchJokesFailed
} from "./actions";
import { getRandomCategoryJoke } from "../../apiEndpoints";

export function* searchJokes({ category }) {
  try {
    const { body } = yield call(getRandomCategoryJoke, category);

    console.log("search data", body);

    yield put(searchJokesSucceeded(body));
  } catch (error) {
    yield put(searchJokesFailed(error));
  }
}

function* watchSearchJokes() {
  yield takeLatest(SEARCH_JOKES, searchJokes);
}

export default watchSearchJokes;
