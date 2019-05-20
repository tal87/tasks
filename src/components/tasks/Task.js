import React from "react";

const Task = props => {
  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "10px" }}>
      <div>{props.subject}</div>
      <br />
      <div>{props.text}</div>
    </div>
  );
};

export default Task;
