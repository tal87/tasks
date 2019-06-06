import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { showLogin, logout } from "../actions";

const renderLogin = props => {
  if (props.loginStatus.user.isLoggedIn) {
    return (
      <button
        onClick={props.logout}
        className="item"
        style={{ outline: "none", cursor: "pointer" }}
      >
        Logout
      </button>
    );
  } else {
    return (
      <button
        onClick={props.showLogin}
        className="item"
        style={{ outline: "none", cursor: "pointer" }}
      >
        Login
      </button>
    );
  }
};

const Header = props => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        App
      </Link>
      <div className="right menu">
        <Link to="/tasks/create" className="item">
          New Task
        </Link>
        <Link to="/tasks/list" className="item">
          Tasks
        </Link>
        {renderLogin(props)}
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { showLogin, logout }
)(Header);
