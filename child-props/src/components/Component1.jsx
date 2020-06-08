import React, { useState } from 'react';



const Component1 =   (props) =>{
    console.log(props.address)
    // const [address,setAddress] = useState(props.address)
    
    

    return(
            <div><h1>Component1</h1>
            <h2>{props.address}</h2>
            </div>
        
   
        
    )
}

export default Component1;