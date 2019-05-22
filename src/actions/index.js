import api from "../api";
import * as types from "./types";

export const fetchTasks = () => {
  return async () => {
    let resp = await api("/tasks");
    return {
      type: types.FETCH_TASKS,
      payload: resp.data
    };
  };
};
