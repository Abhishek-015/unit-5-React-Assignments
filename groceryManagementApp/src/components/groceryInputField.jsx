import React from "react";

const Input = ({ value, handleChange }) => (
  <div className="col">
    <input
      type="text"
      className="form-control"
      placeholder="Enter Item Name"
      value={value}
      onChange={handleChange}
      key="input"
      autoFocus
    />
  </div>
);

export default Input;
