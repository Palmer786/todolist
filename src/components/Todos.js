import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Paper, Typography } from "@material-ui/core";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useContext(TodoContext);

  return (
    <div>
      <Paper className="paper" elevation={5}>
        <div className="page-title">
          <Typography variant="h3" component="h3">
            Todos
          </Typography>
          <BorderColorIcon color="primary" fontSize="large" />
        </div>
      </Paper>
      <AddTodo />
      <Paper className="paper" elevation={5}>
        {todos.map(todo => {
          const { id, title } = todo;
          return <Todo id={id} title={title} key={id} />;
        })}
      </Paper>
    </div>
  );
};

export default Todos;
