import React from "react";
import { useState,useEffect } from "react";
import { ExpenseContext } from "../context/expenseContext";
import Axios from 'axios';

const TotalBalance = () => {
 // const { entries } = useContext(ExpenseContext);
 const [entries,getEntries] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            const fetcher = await Axios.get('http://192.168.1.105:3000/data');
            console.log(fetcher)
            getEntries(fetcher.data)

        }
        getData();
    },[])

  // console.log(entries)

  let tot = 0;

  entries.forEach((element) => {
    tot += parseInt(element.amount);
  });

  // console.log(tot)

  return <h2 className="display-4 text-center">Balance: ${tot}</h2>;
};

export default TotalBalance;
