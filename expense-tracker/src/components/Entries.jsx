import React, { useContext } from 'react'
import Entry from './Entry'

import { ExpenseContext } from '../context/expenseContext'

const Entries = () => {
  
    let { entries } = useContext(ExpenseContext)



    return (
        <div className='mt-4 container justify-content-center'>
            <h4 className="display-6">Entries</h4>
            <hr/>


            <div className="list-group">

          {
            entries && entries.map(element => {
             return <Entry el={element} key={element.id} />

                
            })
        }

            </div>
            
        </div>
    )
}

export default Entries
