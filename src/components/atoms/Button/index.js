import React from "react";

const Button = ({ text, onSubmit, ...rest }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary "
        onClick={onSubmit}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
