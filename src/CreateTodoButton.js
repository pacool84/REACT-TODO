import React from "react";
import "./CreateTodoButton.css";

const handleClick = () => {
  console.log("Create Todo Button Clicked");
};

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton" onClick={() => handleClick()}>
      +
    </button>
  );
}

export { CreateTodoButton };
