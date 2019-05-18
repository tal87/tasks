import React from "react";

class TaskCreate extends React.Component {
  onFormSubmit = e => {
    e.preventDefault();
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
            <input type="text" name="subject" placeholder="Subject" />
          </label>
        </div>
        <div className="field">
          <label>
            Text
            <textarea name="text" />
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
