
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

    const setEntry = (desc,money) =>{
   //     desc.replace(desc.charAt(0),desc[0].toUpperCase())
        setEntries([...entries,{
            id:entries.length+1,
            description:desc,
            amount:money
        }])
    }
    return(
        <ExpenseContext.Provider value={{entries , deleteEntry, setEntry}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}
