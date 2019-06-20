import * as types from "../actions/types";

const DEFAULT_STATE = {
  showLogin: false,
  user: { isLoggedIn: false, id: "all_users" }
};
const loginStatus = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.SHOW_LOGIN:
      return { ...state, showLogin: true, showRegister: false };
    case types.HIDE_LOGIN:
      return { ...state, showLogin: false, showRegister: false };
    case types.LOGIN_FAIL:
      return { ...state, status: action.payload };
    case types.LOGIN_SUCCESS:
      return {
        showLogin: false,
        user: { isLoggedIn: true, id: action.payload }
      };
    case types.LOGOUT:
      return DEFAULT_STATE;
    case types.SHOW_REGISTER:
      return { ...state, showRegister: true };
    default:
      return state;
  }
};

export default loginStatus;
