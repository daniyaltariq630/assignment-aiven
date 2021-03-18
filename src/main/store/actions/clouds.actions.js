import axios from "axios";

export const GET_CLOUDS = "[CLOUDS] GET CLOUDS";

export function getClouds() {
  const request = axios.get(`https://api.aiven.io/v1/clouds`, {});
  return (dispatch) =>
    request
      .then((response) => {
        dispatch({
          type: GET_CLOUDS,
          payload: response.data,
        });
      })
      /* API errors logged to the browser console. */
      .catch((error) => {
        console.log("error", error);
      });
}
