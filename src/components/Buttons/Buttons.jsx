import React from "react";

const Button = ({ className, onClick, disabled, type, value, style }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={style}
    >
      {value}
    </button>
  );
};

export default Button;
