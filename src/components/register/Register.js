import React from "react";
import { connect } from "react-redux";

import { showLogin } from "../../actions";
import Modal from "../modal/Modal";

class Login extends React.Component {
  state = { username: "", password: "", fname: "", lname: "" };
  registerBody = () => {
    return (
      <div style={{ margin: "0 10px" }}>
        <form onSubmit={e => this.onLoginClick(e)} className="ui form">
          <div className="field">
            <label>
              First Name
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={this.state.fname}
                onChange={e => this.onInputChange(e)}
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={this.state.lname}
                onChange={e => this.onInputChange(e)}
              />
            </label>
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
          <button onClick={e => this.onLoginClick(e)}>Login</button>
        </form>
      </div>
    );
  };

  onRegisterClick = e => {
    e.preventDefault();
  };

  onLoginClick = e => {
    e.preventDefault();
    this.props.showLogin();
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("props: " + JSON.stringify(this.props));
    return <Modal title="Register" body={this.registerBody()} />;
  }
}

const mapStateToProps = state => {
  console.log("state " + JSON.stringify(state));
  return state;
};

export default connect(
  mapStateToProps,
  { showLogin }
)(Login);
