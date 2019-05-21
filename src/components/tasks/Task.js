import React from "react";

class Task extends React.Component {
  state = { done: false };
  handleChange = e => {
    this.setState({ done: e.target.checked });
  };

  handleClick = e => {
    this.setState({ done: !this.state.done });
  };

  renderHelper() {
    if (this.state.done) {
      return (
        <span>
          <del>{this.props.text}</del>Delete
        </span>
      );
    } else {
      return this.props.text;
    }
  }

  render() {
    return (
      <div style={{ padding: "10px" }} onClick={e => this.handleClick(e)}>
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={e => this.handleChange(e)}
        />
        <span style={{ marginLeft: "10px" }}>{this.renderHelper()}</span>
      </div>
    );
  }
}

export default Task;
