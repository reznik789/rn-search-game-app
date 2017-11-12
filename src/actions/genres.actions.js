import axios from "axios";
import { Alert } from "react-native";
import { GENRES_ACTIONS } from "../config/constants";
import CONFIG from "../config/config";

export const getGenres = () => dispatch => {
  dispatch({
    type: GENRES_ACTIONS.FETCHING
  });
  const url = CONFIG.API_URL + "/genres/?fields=id,name,slug&limit=30";
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
    .then(genres =>
      dispatch({
        type: GENRES_ACTIONS.SUCCESS_FETCH,
        genres
      })
    )
    .catch(response => {
      Alert.alert("Error", "Server Error");
      return dispatch({
        type: GENRES_ACTIONS.ERROR_FETCH
      });
    });
};
