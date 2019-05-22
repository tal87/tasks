import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import App from "./components/App";
import combineReducers from "./reducers";

ReactDOM.render(
  <Provider
    store={createStore(combineReducers, applyMiddleware(thunkMiddleware))}
  >
    <App />
  </Provider>,
  document.querySelector("#root")
);
