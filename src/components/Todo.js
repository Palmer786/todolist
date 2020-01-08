import React from "react";
import { Typography } from "@material-ui/core";
import DelTodo from "./DelTodo";

const Todo = ({ id, title }) => {
  return (
    <div key={id} className="todo">
      <Typography variant="h4">{title}</Typography>
      <DelTodo id={id} />
    </div>
  );
};

export default Todo;
