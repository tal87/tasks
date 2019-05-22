import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import combineReducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(combineReducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
