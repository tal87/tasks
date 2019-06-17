import React from "react";
import { connect } from "react-redux";

import { deleteTask } from "../../actions";
import "./tasks.css";

class Task extends React.Component {
  state = { done: false, editMode: false, users: [] };
  handleChange = e => {
    this.setState({ done: e.target.checked });
  };

  handleTaskClick() {
    this.setState({ done: !this.state.done });
  }

  handleDeleteClick = e => {
    e.stopPropagation();
    this.props.deleteTask(this.props.id, this.props.loginStatus.user.id);
  };

  handleEditClick(e) {
    e.stopPropagation();
    this.setState({ editMode: true });
  }

  renderHelper() {
    if (this.state.done) {
      return (
        <span>
          <del>{this.props.text}</del>
          <button onClick={e => this.handleDeleteClick(e)}>Delete</button>
        </span>
      );
    } else {
      return this.props.text;
    }
  }

  onShareChange = e => {
    this.setState({ users: e.target.value.split(",") });
  };

  renderEditor() {
    if (!this.state.editMode) {
      return;
    }

    return (
      <div>
        <input
          placeholder="Share task with...."
          value={this.state.users.join(",")}
          onChange={e => this.onShareChange(e)}
        />
        <button onClick={() => this.props.shareTask(this.state.users)}>
          Done
        </button>
      </div>
    );
  }

  render() {
    return (
      <div
        className="task"
        style={{ padding: "10px" }}
        onClick={() => this.handleTaskClick()}
      >
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={e => this.handleChange(e)}
        />
        <span style={{ marginLeft: "10px" }}>
          {this.renderHelper()}
          <button className="btnEdit" onClick={e => this.handleEditClick(e)}>
            Edit
          </button>
        </span>
        {this.renderEditor()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { deleteTask }
)(Task);
