import React from "react";

import api from "../../api";

class TaskCreate extends React.Component {
  state = { subject: "", text: "" };
  onFormSubmit = async e => {
    api.post("/tasks", { subject: this.state.subject, text: this.state.text });
    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form
        method="post"
        className="ui form"
        onSubmit={e => this.onFormSubmit(e)}
      >
        <div className="field">
          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={e => this.onChange(e)}
            />
          </label>
        </div>
        <div className="field">
          <label>
            Text
            <textarea name="text" onChange={e => this.onChange(e)} />
          </label>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default TaskCreate;
