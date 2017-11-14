import { GAMES_ACTIONS } from "../config/constants";

const initialState = {
  games: [],
  fetching: false,
  error: false
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAMES_ACTIONS.FETCHING:
      return { ...state, ...{ fetching: true, error: false } };
    case GAMES_ACTIONS.SUCCESS_FETCH:
      return {
        ...state,
        ...{ games: action.games, fetching: false, error: false }
      };
    case GAMES_ACTIONS.ERROR_FETCH:
      return { ...state, ...{ fetching: false, error: true } };
    default:
      return state;
  }
};
