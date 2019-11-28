import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const DelTodo = ({ id }) => {
  const [todos, setTodos] = useContext(TodoContext);
  const delTodo = () => {
    setTodos(todos => [...todos.filter(todo => todo.id !== id)]);
  };
  return <button onClick={delTodo} className="delButton">X</button>;
};

export default DelTodo;
