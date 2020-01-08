import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Nav = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const style = {
    link: {
      textDecoration: "none",
      color: "white"
    }
  };
  return (
    <div >
      <AppBar position="static" color="primary">
        <Toolbar className="app-bar">
          <Typography variant="h4">Todo</Typography>
          <Button variant="outlined" size="medium">
            <Link to="/" style={style.link}>
              My todos
            </Link>
          </Button>
          <Button variant="outlined" size="medium">
            <Link to="/about" style={style.link}>
              About
            </Link>
          </Button>
          <Typography variant="h5">
            Amount of things to do: {todos.length}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
