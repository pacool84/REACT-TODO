import React from "react";
import { TodoContext } from "../Context";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Aqui esta el placeholder"
      ></textarea>
      <div>
        <button type="submit">Añadir</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
