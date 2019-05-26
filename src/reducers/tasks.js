import * as types from "../actions/types";

const tasks = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export default tasks;
