import { combineReducers } from "redux";

import * as types from "../actions/types";

export default combineReducers({
  tasks: (state = [], action) => {
    switch (action.type) {
      case types.FETCH_TASKS:
        return action.payload;
      default:
        return state;
    }
  }
});
