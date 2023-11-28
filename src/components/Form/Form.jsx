import React, { useState, useRef } from "react";
import Input from "../Input/Input";
import TextBox from "../TextBox/TextBox";
import CustomDatePicker from "../DatePicker/DatePicker";
import Button from "../Buttons/Buttons";

const Form = ({ onSave, onCancel }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const datePickerRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleSave = () => {
    const newTodo = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: selectedDate ? selectedDate.toISOString() : null,
    };
  
    onSave(newTodo);
  
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    setSelectedDate(null); 
  };
  

  const handleCancel = () => {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    setSelectedDate(null); 

    onCancel();
  };

  return (
    <div>
      <h2>New Todo</h2>
      <Input type="text" name="title" placeholder="Title" ref={titleRef} />
      <TextBox name="description" placeholder="Description" ref={descriptionRef} />
      <CustomDatePicker selectedDate={selectedDate} onSelectDate={setSelectedDate} ref={datePickerRef} />
      <Button type="button" value="Save" onClick={handleSave} />
      <Button type="button" value="Cancel" onClick={handleCancel} />
    </div>
  );
};

export default Form;
