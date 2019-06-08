import React from "react";
import { connect } from "react-redux";

import { login, showRegister } from "../../actions";
import Modal from "../modal/Modal";

class Login extends React.Component {
  state = { username: "", password: "" };
  loginBody = () => {
    return (
      <div style={{ margin: "0 10px" }}>
        <form onSubmit={e => this.onLoginClick(e)} className="ui form">
          <div className="field">
            <label>
              Email
              <input
                type="text"
                name="username"
                placeholder="email"
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
          <button onClick={e => this.onRegisterClick(e)}>Register</button>
          {this.props.loginStatus.status && (
            <div className="ui red message">
              <i class="close icon" />
              <i className="exclamation circle icon" />
              {this.props.loginStatus.status}
            </div>
          )}
        </form>
      </div>
    );
  };

  onRegisterClick = e => {
    e.preventDefault();
    this.props.showRegister();
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
  { login, showRegister }
)(Login);
