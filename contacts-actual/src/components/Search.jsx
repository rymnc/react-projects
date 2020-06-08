import React, { useEffect } from 'react';
import { useState } from 'react';

const Search = (props) =>{

    const [search,newSearch] = useState('');

     useEffect(()=>{
         props.handleSearch(search);
     },[search])


    const handleChange = (events)  =>{
        newSearch(events.target.value)
        console.log(props)
        

    }

    return(
        <div className="my-4">
            <input type="text" className="form-control" placeholder="Search Contacts" onChange={handleChange}/>
            
        </div>
    )
}

export default Search;