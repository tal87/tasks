import * as types from "./types";
import api from "../api";

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
