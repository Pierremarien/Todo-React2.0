import React from "react";

const Checkbox = ({ className, checked, onChange, label, style }) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={style}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
