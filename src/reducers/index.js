import { combineReducers } from "redux";
import { genresReducer } from "./genres.reducer";

export default combineReducers({
  genres: genresReducer
});
