import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import "./App.css";

const todos = [
  { text: "Enviar ordenes de compra", completed: true },
  { text: "Comprar comida", completed: false },
  { text: "Comprar bebida", completed: true },
  { text: "Comprar ropa", completed: false },
];

const totalTodos = todos.length;
function App() {
  return (
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
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
