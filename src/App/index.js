import React, { useState } from "react";
import { AppUI } from "./AppUI";
//import "./App.css";

/* const defaultTodos = [
  { text: "Enviar ordenes de compra", completed: true },
  { text: "Comprar comida", completed: false },
  { text: "Comprar bebida", completed: true },
  { text: "Comprar ropa", completed: false },
]; */

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorageTodos.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const pendingTodos = todos.filter((todo) => todo.completed === false).length;

  /* Logic to the search Bar */
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    /* todos[todoIndex] = {
        text: todos[todoIndex].text,
        completed: true
      } */
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      pendingTodos={pendingTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
