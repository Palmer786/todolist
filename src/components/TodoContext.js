import React, { useState, createContext, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("myTodos")) || []
  );

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
