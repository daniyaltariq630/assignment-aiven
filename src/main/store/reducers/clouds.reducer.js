import * as Actions from "../actions";

const initialState = {
  list: [],
};

/* Reducer take action and argument to update state with response data */
const cloudsReducer = function (state = initialState, action) {
  if (action.type === Actions.GET_CLOUDS) {
    return {
      ...state,
      list: action.payload,
    };
  } else {
    return state;
  }
};

export default cloudsReducer;
