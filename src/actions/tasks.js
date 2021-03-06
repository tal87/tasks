import * as types from "./types";
import api from "../api";

export const fetchTasks = id => {
  return async dispatch => {
    let resp = await api(`/tasks/${id}`);
    dispatch({
      type: types.FETCH_TASKS,
      payload: resp.data
    });
  };
};

export const createTask = (id, text) => {
  return async dispatch => {
    await api.post("/tasks", {
      text: text,
      id
    });

    fetchTasks(id)(dispatch);
  };
};

export const deleteTask = (id, uid) => {
  return async dispatch => {
    await api.delete(`/tasks?id=${id}`);
    fetchTasks(uid)(dispatch);
  };
};

export const shareTask = (task, users) => {
  return async dispatch => {
    await api.put("/tasks", {
      task,
      users
    });
  };
};
