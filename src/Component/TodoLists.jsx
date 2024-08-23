import React from "react";
import Todoitem from "./Todoitem";

const TodoLists = ({ items, setItems }) => {
  return (
    <>
      <ul className="list-group list-group-flush text-center ">
        <Todoitem items={items} setItems={setItems} />
      </ul>
    </>
  );
};

export default TodoLists;
