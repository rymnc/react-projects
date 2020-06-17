import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ExpenseContext } from "../context/expenseContext";

const AddMoney = () => {
  const { setEntry } = useContext(ExpenseContext);

  const [money, newMoney] = useState("");
  const [desc, newDesc] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setEntry(desc, money);
  };

  const handleChange1 = (event) => {
    event.preventDefault();
    newDesc(event.target.value);
  };

  const handleChange2 = (event) => {
    event.preventDefault();
    newMoney(parseInt(event.target.value));
  };

  return (
    <div className="container justify-content-center">
      <div className="card border-info">
        <div className="card-header text-info text-center">
          <h5>Add Entry</h5>
        </div>
        <div className="card-body">
          <div className="form-group mx-3 my-3">
            <input
              type="text"
              value={desc}
              onChange={handleChange1}
              name="Thing"
              id="1"
              className="form-control my-3"
              placeholder="Entry"
            />
            <input
              type="number"
              value={money}
              onChange={handleChange2}
              name="Value"
              id="2"
              placeholder="Amount"
              className="form-control my-3"
            />
            <button className="btn btn-info" onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoney;
