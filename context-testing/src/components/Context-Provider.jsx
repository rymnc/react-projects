import React,{createContext,useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) =>{
    const [count, setcount] = useState(0)

    const updateCount = () =>{
        setcount(count+1)
        
    }
    return(

        <AppContext.Provider value = {{count}}>

            {props.children}
            {count}
            <button onClick={updateCount}>Increment</button>

        </AppContext.Provider>

    )
}
