import React,{useContext} from 'react'
import {AppContext } from './Context-Provider'

const Component3 = () => {

    const state = useContext(AppContext)
    let {count} = state
    console.log(count)
    return (
        <div>
            Component 3 = {count}
        </div>
    )
}

export default Component3
