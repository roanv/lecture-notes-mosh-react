import React from "react";

const Input = ({ id, label, value, onChange, autoFocus }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        autoFocus={autoFocus}
        onChange={onChange}
        value={value}
        id={id}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
