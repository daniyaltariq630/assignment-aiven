import { combineReducers } from "redux";
import clouds from "./clouds.reducer";

const createReducer = (asyncReducers) =>
  combineReducers({
    clouds,
    ...asyncReducers,
  });

export default createReducer;
