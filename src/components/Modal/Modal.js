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
        <div style={props.headerStyle}>
          <h3>Modal Header</h3>
        </div>
        <hr />
        <div style={props.bodyStyle}>
          <h3>Modal Body</h3>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { hideLogin }
)(Modal);
