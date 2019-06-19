import React from "react";
import { connect } from "react-redux";

import "./Modal.css";
import { hideLogin } from "../../actions";

const onBackgroundClick = (e, props) => {
  if (e.target.id === "modal_container") {
    props.hideLogin();
  }
};

const Modal = props => {
  return (
    <div
      id="modal_container"
      className="modal-background"
      onClick={e => onBackgroundClick(e, props)}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h3>{props.title}</h3>
        </div>
        <hr />
        <div className="modal-body">{props.body}</div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { hideLogin }
)(Modal);
