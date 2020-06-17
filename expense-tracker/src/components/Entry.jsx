import React from "react";
import { useContext } from "react";
import { ExpenseContext } from "../context/expenseContext";
const Entry = (props) => {
  // console.log('props:',props)
  let styler =
    "entry-item mt-2 list-group-item list-group-item-action list-group-item-";
  const { deleteEntry } = useContext(ExpenseContext);

  if (props.el.amount >= 1) {
    styler += "success";
  } else {
    styler += "danger";
  }
  return (
    <div className=" rounded">
      <li className={styler}>
        {props.el.description}
        <button
          className="close close-button"
          onClick={() => deleteEntry(props.el.id)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <span className="float-right">
          {props.el.amount >= 1 ? "+" : "-"}${Math.abs(props.el.amount)}
        </span>
      </li>
    </div>
  );
};

export default Entry;
