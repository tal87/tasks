import React from "react";
import { connect } from "react-redux";

import { createTask } from "../../actions";
import TaskList from "./TaskList";

class TaskCreate extends React.Component {
  state = { subject: "", text: "" };
  onFormSubmit = async e => {
    // api.post("/tasks", { subject: this.state.subject, text: this.state.text });
    this.props.createTask(this.state.text);
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
