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
