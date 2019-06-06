import React from "react";
import { connect } from "react-redux";

import { createTask } from "../../actions";
import TaskList from "./TaskList";

class TaskCreate extends React.Component {
  state = { text: "" };
  onFormSubmit = e => {
    this.props.createTask(this.props.loginStatus.user.id, this.state.text);
    this.setState({ text: "" });
    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <TaskList />
        <form
          method="post"
          className="ui form"
          onSubmit={e => this.onFormSubmit(e)}
        >
          <div className="two fields">
            <div className="field">
              <input
                placeholder="Reminder"
                name="text"
                onChange={e => this.onChange(e)}
                value={this.state.text}
              />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    createTask
  }
)(TaskCreate);
