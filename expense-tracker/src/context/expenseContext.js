
import React, { createContext, useState } from 'react'

export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) =>{

    const [entries,setEntries] = useState([
        {
            id:1,
            description:'Pizza',
            amount:-20
        },
        {
            id:2,
            description:'Salary',
            amount:200
        },
        {
            id:3,
            description:'Dinner',
            amount:-40
        },
        {
            id:4,
            description:'Dog',
            amount:-100
        }
    ])

    const deleteEntry = (id) =>{
        const newList = entries.filter((el)=>
            el.id!==id
        )

        setEntries(newList)
    }
    return(
        <ExpenseContext.Provider value={{entries , deleteEntry}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}
