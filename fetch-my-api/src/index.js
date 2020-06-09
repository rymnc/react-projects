import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const App = () =>{



   
 

    const [call,setCall] = useState({
        cToken:'',
        address:'',
        cTokenBalance:''
    });

    const handleClick = async () =>{
        const result = await Axios.get('https://salty-temple-30960.herokuapp.com/cTokenBalance/cDai/0x04636b11322756aBa94d09c1deAFdfa04D4f8A74')
        console.log(result)
        const fin = (result.data)
       // console.log(fin)
        console.log(fin['address'])

        setCall({cToken:fin['cToken'],address:fin['address'],cTokenBalance:fin['cTokenBalance']})
        console.log(call)
    }

    


    return(
        <div className='text-center'>
            <button className="btn btn-primary" onClick={handleClick}>Get Data</button>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))