import {
  LOAD_CATEGORY_RANDOM_JOKES,
  LOAD_CATEGORY_RANDOM_JOKES_SUCCEEDED,
  LOAD_CATEGORY_RANDOM_JOKES_FAILED
} from "./actions";

const initialState = {
  randomCategoryJoke: {
    joke: {},
    isLoading: false,
    hasLoaded: false,
    hasError: {
      status: false,
      error: ""
    }
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CATEGORY_RANDOM_JOKES: {
      return {
        ...state,
        isLoading: true,
        hasLoaded: false,
        hasError: {
          status: false,
          error: ""
        }
      };
    }

    case LOAD_CATEGORY_RANDOM_JOKES_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        data: action.data
      };
    }

    case LOAD_CATEGORY_RANDOM_JOKES_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        hasError: {
          status: true,
          error: action.error
        }
      };
    }

    default: {
      return state;
    }
  }
};
