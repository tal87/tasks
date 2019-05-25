import React from "react";
import { connect } from "react-redux";

import { fetchTasks } from "../../actions";
import Task from "./Task";

class TaskList extends React.Component {
  async componentDidMount() {
    this.props.fetchTasks();
  }

  renderTasks() {
    let tasks = this.props.tasks;
    return tasks.map(task => {
      return (
        <Task
          key={task._id}
          id={task._id}
          subject={task.subject}
          text={task.text}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ height: "200px", overflowY: "auto" }}>
        {this.renderTasks()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchTasks }
)(TaskList);
