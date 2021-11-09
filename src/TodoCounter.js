import React from "react";
import "./TodoCounter.css";
function TodoCounter(props) {
  return (
    <h2 className="TodoCounter">
      Has completado 2 de {props.totalTodos} TODO´s
    </h2>
  );
}

export { TodoCounter };
