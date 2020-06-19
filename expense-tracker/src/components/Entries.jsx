import React, { useState } from "react";
import Entry from "./Entry";

import { ExpenseContext } from "../context/expenseContext";
import { useEffect } from "react";
import Axios from "axios";





const Entries = (props) => {
    const [entries,getEntries] = useState([])

     const updateEntries = async () =>{
        const fetcher = await Axios.get('http://192.168.1.105:3000/data');
            console.log(fetcher)
            getEntries(fetcher.data)
    }
    
    useEffect(()=>{
        const getData = async () =>{
            const fetcher = await Axios.get('http://192.168.1.105:3000/data');
            console.log(fetcher)
            getEntries(fetcher.data)

        }
        getData();
    },[])

     

 // let { entries } = useContext(ExpenseContext);

    const renderElements =  () =>{
        return (
        entries &&
          entries.map((element) => {
            return <Entry el={element} key={element.id} func={updateEntries} />;
          })
        )
    }

  return (
    <div className="mt-4 container justify-content-center">
      <h4 className="display-6">Entries</h4>
      <hr />

      <div className="list-group">
        {renderElements()}
      </div>
    </div>
  );
};

export default Entries;
