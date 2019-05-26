import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import TaskCreate from "./tasks/TaskCreate";
import TaskList from "./tasks/TaskList";
import Modal from "./Modal";

const App = props => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Route path="/tasks/list" exact component={TaskList} />
        <Route path="/tasks/create" exact component={TaskCreate} />
        {props.login.showModal && <Modal />}
      </Router>
    </div>
  );
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);
