import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { TodoContext } from "./TodoContext";

const DelTodo = ({ id }) => {
  const [todos, setTodos] = useContext(TodoContext);
  const delTodo = () => {
    setTodos(todos => [...todos.filter(todo => todo.id !== id)]);
  };
  return (
    <Button onClick={delTodo}>
      <DeleteIcon color="error" />
    </Button>
  );
};

export default DelTodo;
