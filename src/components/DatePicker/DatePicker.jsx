import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = forwardRef(({ selectedDate, onSelectDate }, ref) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => onSelectDate(date)}
      ref={ref}
      dateFormat="yyyy-MM-dd"
    />
  );
});

export default CustomDatePicker;
