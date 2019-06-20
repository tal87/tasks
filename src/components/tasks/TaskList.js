import React from "react";
import { connect } from "react-redux";

import { fetchTasks, shareTask } from "../../actions";
import Task from "./Task";

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks(this.props.loginStatus.user.id);
  }

  handleTaskShare(task, users) {
    this.props.shareTask(task, users);
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
          shareTask={users => this.handleTaskShare(task, users)}
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
  { fetchTasks, shareTask }
)(TaskList);
