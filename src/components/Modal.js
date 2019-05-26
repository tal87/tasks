import React from "react";

const Modal = () => {
  return (
    <div
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

export default Modal;
