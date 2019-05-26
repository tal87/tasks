import React from "react";
import { connect } from "react-redux";

import { deleteTask } from "../../actions";

class Task extends React.Component {
  state = { done: false };
  handleChange = e => {
    this.setState({ done: e.target.checked });
  };

  handleTaskClick = () => {
    this.setState({ done: !this.state.done });
  };

  handleDeleteClick = e => {
    e.stopPropagation();
    this.props.deleteTask(this.props.id);
  };

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

  render() {
    return (
      <div style={{ padding: "10px" }} onClick={() => this.handleTaskClick()}>
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { deleteTask }
)(Task);
