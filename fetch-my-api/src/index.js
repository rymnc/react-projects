import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { useForm } from 'react-hook-form';


const App = () =>{


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setCall({cToken:data.Token,address:data.Address})
        console.log(call)
        handleClick(data.Token,data.Address);
    };
    console.log(errors);
   
 

    const [call,setCall] = useState({
        cToken:'',
        address:'',
        cTokenBalance:''
    });

    const handleClick = async (token,address) => {
        const result = await Axios.get(
          "https://salty-temple-30960.herokuapp.com/cTokenBalance/"+token+"/"+address
        );
        console.log(result);
        const fin = result.data;
        // console.log(fin)
        console.log(fin["address"]);
    
        setCall({
          cToken: fin["cToken"],
          address: fin["address"],
          cTokenBalance: fin["cTokenBalance"]
        }); // this will issue a rerender, AFTER this method finishes
        console.log(call); // so this "call" is the old one
        // I added "call" to the jsx below, so that you can see the result
        // after the rerender
      };
    

    


    return(
        <div className='text-justified'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Token" name="Token" ref={register}  className='form-control w-25 m-2'  />
            <input type="text" placeholder="Address" name="Address" ref={register} className='form-control w-25 m-2'/>

            <input type="submit" className='btn btn-primary m-2'/>  
            </form>
            
            {/* <button className="btn btn-primary" onClick={handleClick}>Get Data</button> */}
            <h2 className="text">cToken:{call.cToken}</h2>
            <h3>Address:{call.address}</h3>
            <h3>Balance:{call.cTokenBalance}</h3>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))