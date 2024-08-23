import React, { useState } from "react";
import style from "./TodoInput.module.css";
import TodoLists from "./TodoLists";
import { v4 as uuidv4 } from "uuid";
import { IoIosAddCircle } from "react-icons/io";
import { BiSolidAddToQueue } from "react-icons/bi";

const TodoInput = () => {
  let [text, setText] = useState("");
  let [date, setDate] = useState("");
  let [items, setItems] = useState([]);
  const handleONchange = (event) => {
    setText(event.target.value);
    // console.log(text);
  };

  const handleONchangeDate = (event) => {
    setDate(event.target.value);

    // console.log(date);
  };
  const handelAddItem = () => {
    setItems((prv) => [...prv, { item: text, dates: date, id: uuidv4() }]);
    setText("");
    setDate("");
    // console.log(items);
  };

  const handleSubmit = (event) => {
    // alert("A name was submitted: " + text);
    event.preventDefault();
  };
  return (
    <>
      <div className={`container text-center my-4 `}>
        <form className={`row g-3 `} onSubmit={handleSubmit}>
          <div className="col-12 col-md-5">
            <input
              type="text"
              className="form-control"
              id="staticEmail2"
              placeholder="Enter Your Task"
              onChange={handleONchange}
              value={text}
            />
          </div>
          <div className="col-12 col-md-5">
            <input
              type="date"
              className="form-control"
              id="inputPassword2"
              onChange={handleONchangeDate}
              value={date}
            />
          </div>
          <div className="col-12 col-md-5 d-grid">
            <button
              onClick={handelAddItem}
              type="submit"
              className="btn btn-primary mb-3 w-75 h-75 fs-5"
            >
              <BiSolidAddToQueue />
            </button>
          </div>
        </form>
        <br />
        <hr />
        {items.length == 0 && <h2>Enjoy your day</h2>}
        <TodoLists items={items} setItems={setItems} />
      </div>
    </>
  );
};

export default TodoInput;
