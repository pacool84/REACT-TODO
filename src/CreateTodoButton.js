import React from "react";

const handleClick = () => {
  console.log("Create Todo Button Clicked");
};

function CreateTodoButton() {
  return <button onClick={() => handleClick()}>+</button>;
}

export { CreateTodoButton };
