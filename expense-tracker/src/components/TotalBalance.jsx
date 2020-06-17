import React from "react";
import {useContext} from 'react'
import { ExpenseContext } from "../context/expenseContext";


const TotalBalance = () => {
  const {entries} = useContext(ExpenseContext);
  
  // console.log(entries)

  let tot=0;

  entries.forEach(element => {

    tot += element.amount

  });

  // console.log(tot)


  return (
  <h2 className='display-4 text-center'>Balance: ${tot}</h2>
  );
};

export default TotalBalance;
