import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Todos from "./components/Todos";
import { TodoProvider } from "./components/TodoContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'typeface-roboto';
import "./App.css";

const App = () => {
  return (
    <Router>
      <TodoProvider>
        <Nav />
        <Route path="/" exact component={Todos} />
        <Route path="/about" component={About} />
      </TodoProvider>
    </Router>
  );
};

export default App;
