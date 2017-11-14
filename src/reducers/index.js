import { combineReducers } from "redux";
import { genresReducer } from "./genres.reducer";
import { gamesReducer } from "./games.reducer";

export default combineReducers({
  genres: genresReducer,
  games: gamesReducer
});
