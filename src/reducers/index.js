import { combineReducers } from "redux";

import tasks from "./tasks";
import loginStatus from "./login";

export default combineReducers({
  tasks,
  loginStatus
});
