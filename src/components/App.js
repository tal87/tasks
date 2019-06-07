import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import TaskCreate from "./tasks/TaskCreate";
import TaskList from "./tasks/TaskList";
import Login from "./login/Login";
import Register from "./register/Register";

const App = props => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Route path="/tasks/list" exact component={TaskList} />
        <Route path="/tasks/create" exact component={TaskCreate} />
        {props.loginStatus.showLogin && <Login />}
        {props.loginStatus.showRegister && <Register />}
      </Router>
    </div>
  );
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);
