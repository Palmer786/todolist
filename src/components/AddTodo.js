import React, { useState, useContext } from "react";
import { Button, TextField, Paper } from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { uuid } from "uuidv4";
import { TodoContext } from "./TodoContext";

const AddTodo = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [dialog, setDialog] = useState(false);

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    if (title === "") {
      return setDialog(true);
    } else {
      setTodos(todos => [...todos, { id: uuid(), title }]);
      setTitle("");
    }
  };

  return (
    <Paper className="paper" elevation={5}>
      <div className="add-todo">
        <TextField
          label="Add todo"
          id="title"
          type="text"
          value={title}
          onChange={updateTitle}
        />
        <Button variant="contained" onClick={addTodo} color="primary" >
          <AddCircleIcon />
        </Button>
      </div>
      <Dialog open={dialog}>
        <DialogTitle>Cannot add task to do</DialogTitle>
        <DialogContent>
          <DialogContentText>Task title cannot be empty.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog(false)} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
export default AddTodo;
