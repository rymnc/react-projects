import React from "react";
import { useContext } from "react";
import { ExpenseContext } from "../context/expenseContext";

const IncomeExpense = () => {
  const { entries } = useContext(ExpenseContext);

  let sumin = 0;
  let sumout = 0;

  entries.forEach((element) => {
    if (element.amount >= 1) {
      sumin += element.amount;
    } else {
      sumout += Math.abs(element.amount);
    }
  });

  return (
    <div className="container justify-content-center text-center">
      <div className="row">
        <div className="col">
          <div className="card border-success mb-2">
            <h5 className="card-header">Income</h5>
            <div className="card-body text-success">
              <h5 className="card-title">+${sumin}</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-danger mb-2">
            <h5 className="card-header">Expenses</h5>
            <div className="card-body text-danger">
              <h5 className="card-title">-${sumout}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
