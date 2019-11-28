import React, { useState, useContext } from "react";
import { uuid } from "uuidv4";
import { TodoContext } from "./TodoContext";

const AddTodo = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos(todos => [...todos, { id: uuid(), title }]);
    setTitle("");
  };


  return (
    <form onSubmit={addTodo} className="addTodo">
      <input type="text" name="title" placeholder="New item..." value={title} onChange={updateTitle} />
      <button>ADD</button>
    </form>
  );
};

export default AddTodo;
