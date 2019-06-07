import * as types from "../actions/types";

const DEFAULT_STATE = { showLogin: false, user: { isLoggedIn: false, id: "" } };
const loginStatus = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.SHOW_LOGIN:
      return { showLogin: true };
    case types.HIDE_LOGIN:
      return { showLogin: false };
    case types.LOGIN_FAIL:
      return { ...state, status: action.payload };
    case types.LOGIN_SUCCESS:
      return {
        showLogin: false,
        user: { isLoggedIn: true, id: action.payload }
      };
    case types.LOGOUT:
      return { ...state, user: { isLoggedIn: false, id: "" } };
    case types.SHOW_REGISTER:
      return { showRegister: true };
    default:
      return state;
  }
};

export default loginStatus;
