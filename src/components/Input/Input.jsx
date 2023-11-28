import React from "react";

const Input = React.forwardRef(
  ({ className, type, placeholder, value, onChange, style }, ref) => {
    return (
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        ref={ref}
      />
    );
  }
);

export default Input;
