import api from "../api";
import * as types from "./types";

export const fetchTasks = () => {
  return async dispatch => {
    let resp = await api("/tasks");
    dispatch({
      type: types.FETCH_TASKS,
      payload: resp.data
    });
  };
};

export const createTask = text => {
  return async dispatch => {
    await api.post("/tasks", {
      text: text
    });

    fetchTasks()(dispatch);
  };
};

export const deleteTask = id => {
  return async dispatch => {
    await api.delete(`/tasks?id=${id}`);
    fetchTasks()(dispatch);
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
