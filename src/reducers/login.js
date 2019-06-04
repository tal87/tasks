import * as types from "../actions/types";

const DEFAULT_STATE = { showLogin: false };
const login = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.SHOW_LOGIN:
      return { ...state, showLogin: true };
    case types.HIDE_LOGIN:
      return { ...state, showLogin: false };
    default:
      return state;
  }
};

export default login;
