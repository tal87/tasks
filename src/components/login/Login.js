import React from "react";
import { connect } from "react-redux";

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
        </form>
      </div>
    );
  };

  onLoginClick = e => {
    e.preventDefault();
    console.log(`username: ${this.state.username}`);
    console.log(`password: ${this.state.password}`);
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <Modal title="Login" body={this.loginBody()} />;
  }
}

export default connect()(Login);
