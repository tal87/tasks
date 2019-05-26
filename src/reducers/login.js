import * as types from "../actions/types";

const DEFAULT_STATE = { showModal: false };
const login = (state = DEFAULT_STATE, action) => {
  console.log("new action: " + action);
  switch (action.type) {
    case types.LOGIN_BUTTON_CLICK:
      return { ...state, showModal: true };
    default:
      return state;
  }
};

export default login;
