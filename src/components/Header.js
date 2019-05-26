import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { showLoginPopup } from "../actions";

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
        <button
          onClick={e => props.showLoginPopup()}
          className="item"
          style={{ outline: "none", cursor: "pointer" }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { showLoginPopup }
)(Header);
