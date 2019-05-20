import React from "react";
import api from "../../api";

import Task from "./Task";

class TaskList extends React.Component {
  state = { tasks: [] };
  async componentDidMount() {
    let resp = await api("/tasks");
    this.setState({ tasks: resp.data });
  }

  renderTasks() {
    let tasks = this.state.tasks;
    return tasks.map(task => {
      return <Task key={task._id} subject={task.subject} text={task.text} />;
    });
  }

  render() {
    return <div>{this.renderTasks()}</div>;
  }
}

export default TaskList;
