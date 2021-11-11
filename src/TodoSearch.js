import React, { Fragment } from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <Fragment>
      <input
        className="TodoSearch"
        placeholder="Search a ToDo"
        onChange={onSearchValueChange}
        value={searchValue}
      />
      <p>{searchValue}</p>
    </Fragment>
  );
}

export { TodoSearch };
