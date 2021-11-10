import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const handleClick = () => {
    console.log("Create Todo Button Clicked");
  };
  return (
    <button className="CreateTodoButton" onClick={() => handleClick()}>
      +
    </button>
  );
}

export { CreateTodoButton };
