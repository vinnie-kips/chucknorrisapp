import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_CATEGORY_RANDOM_JOKES,
  loadCategoryRandomJokesSucceeded,
  loadCategoryRandomJokesFailed
} from "./actions";
import { getRandomCategoryJoke } from "../../apiEndpoints";

export function* fetchCategoryRandomJokes({ category }) {
  try {
    const {
      body: { category: categoryList, icon_url, id, value }
    } = yield call(getRandomCategoryJoke, category);

    yield put(
      loadCategoryRandomJokesSucceeded({
        category: categoryList[0],
        icon_url,
        id,
        joke: value
      })
    );
  } catch (error) {
    yield put(loadCategoryRandomJokesFailed(error));
  }
}

function* watchFetchCategoryRandomJokes() {
  yield takeLatest(LOAD_CATEGORY_RANDOM_JOKES, fetchCategoryRandomJokes);
}

export default watchFetchCategoryRandomJokes;
