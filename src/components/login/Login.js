import React from "react";
import { connect } from "react-redux";

import { login } from "../../actions";
import Modal from "../modal/Modal";

class Login extends React.Component {
  state = { username: "", password: "" };
  loginBody = () => {
    return (
      <div style={{ margin: "0 10px" }}>
        <form onSubmit={e => this.onLoginClick(e)} className="ui form">
          <div className="field">
            <label>
              Username
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={e => this.onInputChange(e)}
              />
            </label>
          </div>
          <div className="field">
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={e => this.onInputChange(e)}
                value={this.state.password}
              />
            </label>
          </div>
          <button type="submit" className="ui button">
            Submit
          </button>
          <span>{this.props.loginStatus.status}</span>
        </form>
      </div>
    );
  };

  onLoginClick = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("props: " + JSON.stringify(this.props));
    return <Modal title="Login" body={this.loginBody()} />;
  }
}

const mapStateToProps = state => {
  console.log("state " + JSON.stringify(state));
  return state;
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
