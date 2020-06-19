import React from "react";
import { useState } from "react";
import { useContext } from "react";
import App from '../App'
import ReactDOM from 'react-dom'


import { ExpenseContext } from "../context/expenseContext";
import Axios from 'axios';
import {updateEntries} from "./Entries";

const AddMoney = (props) => {
  const { setEntry } = useContext(ExpenseContext);


 // const [rerender,setReRender] = useState(false)
  const [money, newMoney] = useState("");
  const [desc, newDesc] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    await Axios.post(`http://192.168.1.105:3000/push/${desc}/${money}`)
    //ReactDOM.forceUpdate(<App/>,document.getElementById('root'))
    //window.location.reload()
   // setReRender(!rerender)
   // <Entries value={rerender}/>
   props.func();



    

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
