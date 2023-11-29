import React, { useState, useEffect } from "react";
import Form from "../../components/form/Form";
import List from "../../components/list/List";
import Button from "../../components/buttons/Buttons";
import Checkbox from "../../components/Checkbox/Checkbox";
import { v4 as uuidv4 } from "uuid";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const handleSaveTodo = (newTodo) => {
    const todoWithId = { ...newTodo, id: uuidv4() };
    const updatedTodos = [...todos, todoWithId];
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
    <>
      <Checkbox />
      <div>{todo.title}</div>
      <div>{todo.dueDate}</div>
      <div>{todo.description}</div>
      <Button onClick={() => handleRemoveTodo(todo.id)}>Delete</Button>
      <Button onClick={() => handleEditTodo(todo)}>Edit</Button>
    </>
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
