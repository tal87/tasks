import React from "react";
import { Link } from "react-router-dom";

const showLoginPopup = () => {};

const Header = () => {
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
          onClick={showLoginPopup}
          className="item"
          style={{ outline: "none", cursor: "pointer" }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;