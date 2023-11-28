import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import Button from "../../components/Buttons/Buttons";
import Checkbox from "../../components/Checkbox/Checkbox";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const handleSaveTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleRemoveTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleEditTodo = (editedTodo) => {
    console.log("Editing todo:", editedTodo);
  };

  const renderTodoItem = (todo) => (
    <React.Fragment key={todo.id}>
      <Checkbox />
      <div>{todo.title}</div>
      <div>{todo.dueDate}</div>
      <div>{todo.description}</div>
      <Button onClick={() => handleRemoveTodo(todo.id)}>Delete</Button>
      <Button onClick={() => handleEditTodo(todo)}>Edit</Button>
    </React.Fragment>
  );

  return (
    <div>
      <h1>ToDo Page</h1>
      <Form onSave={handleSaveTodo} onCancel={() => {}} />
      <List items={todos} renderItem={renderTodoItem} />
    </div>
  );
};

export default ToDo;
