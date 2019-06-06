import * as types from "./types";
import api from "../api";

export const fetchTasks = id => {
  return async dispatch => {
    if (!id) {
      id = "";
    }

    let resp = await api(`/tasks?user=${id}`);
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
