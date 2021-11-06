import React from "react";
//import "./App.css";

const todos = [
  { text: "Enviar ordenes de compra", complete: false },
  { text: "Comprar comida", complete: false },
  { text: "Comprar bebida", complete: false },
];
function App() {
  return (
    <React.Fragment>
      {/*  <TodoCounter /> */}
      <h2>Has completado 2 de 3 TODO´s</h2>
      {/* <TodoSearch /> */}
      <input placeholder="Search a ToDo" />
      {/*  <TodoList>
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
