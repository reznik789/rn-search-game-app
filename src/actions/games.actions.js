import axios from "axios";
import { Alert } from "react-native";
import { GAMES_ACTIONS } from "../config/constants";
import CONFIG from "../config/config";

export const getGames = ( genreId ) => dispatch => {
  dispatch({
    type: GAMES_ACTIONS.FETCHING
  });
  const url = CONFIG.API_URL + `/games/?fields=id,name,screenshots&limit=30&order=release_dates.date:desc&filter[genres][eq]=${genreId}`;
  debugger;
  return axios
    .get(url, {
      headers: {
        "user-key": CONFIG.USER_KEY
      }
    })
    .then(response => {
      if (response.status == 200) {
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response);
      }
    })
    .then(games =>
      dispatch({
        type: GAMES_ACTIONS.SUCCESS_FETCH,
        games
      })
    )
    .catch(response => {
      Alert.alert("Error", "Server Error");
      return dispatch({
        type: GAMES_ACTIONS.ERROR_FETCH
      });
    });
};
