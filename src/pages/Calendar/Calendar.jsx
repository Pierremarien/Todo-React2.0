import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const TodoTile = ({ todo }) => (
  <div>
    {todo.title}
  </div>
);

const CalendarPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const renderTodos = (date) => {
    const todosOnDate = todos.filter((todo) => {
      const todoDate = new Date(todo.dueDate);
      return todoDate.toDateString() === date.toDateString();
    });

    return (
      <div>
        {todosOnDate.map((todo) => (
          <TodoTile key={todo.id} todo={todo} />
        ))}
      </div>
    );
  };

  const handleDateChange = (date) => {};

  return (
    <div>
      <h2>Calendar Page</h2>
      <Calendar
        onChange={handleDateChange}
        tileContent={({ date }) => renderTodos(date)}
      />
    </div>
  );
};

export default CalendarPage;  