import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import TaskCreate from "./tasks/TaskCreate";
import TaskList from "./tasks/TaskList";

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Route path="/tasks/list" exact component={TaskList} />
        <Route path="/tasks/create" exact component={TaskCreate} />
      </Router>
    </div>
  );
};

export default App;
