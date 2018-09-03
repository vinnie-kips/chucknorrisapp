const LOAD_CATEGORY_RANDOM_JOKES = "LOAD_CATEGORY_RANDOM_JOKES";
const LOAD_CATEGORY_RANDOM_JOKES_SUCCEEDED =
  "LOAD_CATEGORY_RANDOM_JOKES_SUCCEEDED";
const LOAD_CATEGORY_RANDOM_JOKES_FAILED = "LOAD_CATEGORY_RANDOM_JOKES_FAILED";

const loadCategoryRandomJokes = category => ({
  type: LOAD_CATEGORY_RANDOM_JOKES,
  category
});

const loadCategoryRandomJokesSucceeded = data => ({
  type: LOAD_CATEGORY_RANDOM_JOKES_SUCCEEDED,
  data
});

const loadCategoryRandomJokesFailed = error => ({
  type: LOAD_CATEGORY_RANDOM_JOKES_FAILED,
  error
});

export {
  LOAD_CATEGORY_RANDOM_JOKES,
  LOAD_CATEGORY_RANDOM_JOKES_SUCCEEDED,
  LOAD_CATEGORY_RANDOM_JOKES_FAILED,
  loadCategoryRandomJokes,
  loadCategoryRandomJokesSucceeded,
  loadCategoryRandomJokesFailed
};
