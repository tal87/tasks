import React from "react";
import { connect } from "react-redux";

import { hideModal } from "../../actions";

const onBackgroundClick = (e, props) => {
  if (e.target.id === "modal_container") {
    props.hideModal();
  }
};

const Modal = props => {
  return (
    <div
      id="modal_container"
      onClick={e => onBackgroundClick(e, props)}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.5)"
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "600px",
          height: "600px",
          textAlign: "center"
        }}
      >
        <h1>I am a modal</h1>
      </div>
    </div>
  );
};

export default connect(
  null,
  { hideModal }
)(Modal);
