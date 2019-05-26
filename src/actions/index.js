import api from "../api";
import * as types from "./types";

export const fetchTasks = () => {
  console.log("fetching tasks");
  return async dispatch => {
    let resp = await api("/tasks");
    console.log("now dispatching");
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

export const showLoginPopup = () => {
  return {
    type: types.LOGIN_BUTTON_CLICK
  };
};
