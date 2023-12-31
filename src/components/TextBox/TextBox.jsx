import React from "react";

const TextBox = React.forwardRef(
  ({ className, placeholder, value, onChange, style }, ref) => {
    return (
      <textarea
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        ref={ref}
      />
    );
  }
);

export default TextBox;
