import React from "react";
import "./TodoCounter.css";

function TodoCounter(props) {
  return (
    <h2 className="TodoCounter">
      Has completado {props.completedTodos} de {props.totalTodos} TODO´s, quedan
      pendientes {props.pendingTodos}
    </h2>
  );
}

export { TodoCounter };
