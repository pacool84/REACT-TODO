import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import "./App.css";

const defaultTodos = [
  { text: "Enviar ordenes de compra", completed: true },
  { text: "Comprar comida", completed: false },
  { text: "Comprar bebida", completed: true },
  { text: "Comprar ropa", completed: false },
];

function App() {
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
  return (
    <React.Fragment>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        pendingTodos={pendingTodos}
      />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
