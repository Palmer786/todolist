import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const [todos, setTodos] = useContext(TodoContext);
  return (
    <nav>
      <h1>Todo</h1>
      <ul className="nav-links">
        <Link to="/">
          <li className="links-decoration">My todos</li>
        </Link>
        <Link to="/about">
          <li className="links-decoration">About</li>
        </Link>
      </ul>
      <h3>Amount of things to do: {todos.length}</h3>
    </nav>
  );
};

export default Nav;
