import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import AddTodo from "./AddTodo";
import DelTodo from "./DelTodo";

const Todos = () => {
  const [todos, setTodos] = useContext(TodoContext);

  return (
    <div className="todos">
      <h1>MY TODOS</h1>
      <AddTodo />
      {todos.map(todo => (
        <div key={todo.id} className="todo">
          <h2>{todo.title}</h2>
          <DelTodo id={todo.id} />
        </div>
      ))}
    </div>
  );
};

export default Todos;
