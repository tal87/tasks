import * as types from "./types";
import api from "../api";

export const login = (username, password) => {
  return async dispatch => {
    let status = "";
    let resp = await api(`/login?user=${username}&password=${password}`).catch(
      err => {
        status = "bad username/password";
      }
    );

    if (resp) {
      status = "you are now logged in";
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: status
      });
    } else {
      dispatch({
        type: types.LOGIN_FAIL,
        payload: status
      });
    }
  };
};

export const showLogin = () => {
  return {
    type: types.SHOW_LOGIN
  };
};

export const hideLogin = () => {
  return {
    type: types.HIDE_LOGIN
  };
};
