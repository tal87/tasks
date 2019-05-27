import * as types from "../actions/types";

const DEFAULT_STATE = { showModal: false };
const login = (state = DEFAULT_STATE, action) => {
  console.log("new action: " + action);
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, showModal: true };
    case types.HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default login;
