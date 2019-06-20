import * as types from "./types";
import { fetchTasks } from "../actions";
import api from "../api";

export const login = (username, password) => {
  return async dispatch => {
    let status = "";
    let resp = await api(`/login?user=${username}&password=${password}`).catch(
      err => {
        status = err.response.data;
      }
    );

    if (resp) {
      dispatch({
        payload: resp.data["id"],
        type: types.LOGIN_SUCCESS
      });

      dispatch(fetchTasks(resp.data["id"]));
    } else {
      dispatch({
        type: types.LOGIN_FAIL,
        payload: status
      });
    }
  };
};

export const register = data => {
  return async dispatch => {
    let status = "";
    let resp = await api.post("/register", data).catch(err => {
      status = "bad username/password";
    });

    if (resp) {
      dispatch({
        payload: resp.data["id"],
        type: types.LOGIN_SUCCESS
      });

      dispatch(fetchTasks(resp.data["id"]));
    } else {
      dispatch({
        type: types.REGISTER_FAIL,
        payload: status
      });
    }
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(fetchTasks("all_users"));
    return {
      type: types.LOGOUT
    };
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

export const showRegister = () => {
  return {
    type: types.SHOW_REGISTER
  };
};
