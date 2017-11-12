import { GENRES_ACTIONS } from "../config/constants";

const initialState = {
  genres: [],
  fetching: false,
  error: false
};

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENRES_ACTIONS.FETCHING:
      return { ...state, ...{ fetching: true, error: false } };
    case GENRES_ACTIONS.SUCCESS_FETCH:
      return {
        ...state,
        ...{ genres: action.genres, fetching: false, error: false }
      };
    case GENRES_ACTIONS.ERROR_FETCH:
      return { ...state, ...{ fetching: false, error: true } };
    default:
      return state;
  }
};
