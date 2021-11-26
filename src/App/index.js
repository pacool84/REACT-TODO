import React, { useState, useEffect } from "react";
import { AppUI } from "./AppUI";
//import "./App.css";

/* const defaultTodos = [
  { text: "Enviar ordenes de compra", completed: true },
  { text: "Comprar comida", completed: false },
  { text: "Comprar bebida", completed: true },
  { text: "Comprar ropa", completed: false },
]; */

/* Custom Hook */
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  //Verificamos si hay contenido en el localStorage
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;
  const pendingTodos = todos.filter((todo) => todo.completed === false).length;

  /* Logic to the search Bar */
  let searchedTodos = initialValue;

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
    saveTodos(newTodos);
    /* todos[todoIndex] = {
        text: todos[todoIndex].text,
        completed: true
      } */
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  console.log("RENDER antes del Use Effect");

  useEffect(() => {
    console.log("Usando USE EFFECT");
  });

  console.log("RENDER despues del Use Effect");

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
