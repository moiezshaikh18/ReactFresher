import React from "react";

const Button = ({ value, onClick, disabled, className }) => {
  return (
    <button
      onClick={() => onClick(value)}
      disabled={disabled}
      className={`calc-btn ${className}`}
    >
      {value}
    </button>
  );
};

export default Button;
