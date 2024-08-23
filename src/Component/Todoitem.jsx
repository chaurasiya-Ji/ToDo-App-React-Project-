import React from "react";
import { MdDelete } from "react-icons/md";
const Todoitem = ({ items, setItems }) => {
  let DeleteItem = (id) => {
    setItems(items.filter((item) => item.id != id));
  };
  return items.map((item) => {
    return (
      <li
        key={item.id}
        className="list-group-item d-flex flex-column flex-md-row align-items-start align-items-md-center"
      >
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          {item.item.toUpperCase()}
        </div>
        <div className="col-12 col-md-4 mb-2 mb-md-0">{item.dates}</div>
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          <button
            className="btn btn-danger btn-lg ms-5"
            onClick={() => DeleteItem(item.id)}
          >
            <MdDelete />
          </button>
        </div>
      </li>
    );
  });
};

export default Todoitem;
