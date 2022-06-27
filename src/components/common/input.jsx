import React from "react";

// const Input = ({ id, label, value, onChange, autoFocus, error }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={id}>{label}</label>
//       <input
//         autoFocus={autoFocus}
//         onChange={onChange}
//         value={value}
//         id={id}
//         type="text"
//         className="form-control"
//       />
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// };

const Input = ({ id, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input {...rest} id={id} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
