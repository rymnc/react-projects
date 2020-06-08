import React,{ useState } from 'react';

const Addtweet = () =>{

    const [contents,Addcontents] = useState({
        id:0,
        name:'',
        email:'',
        phone:'',
        data:'',
        handle:''
    })

    return(

        <button className="btn btn-primary">Hello</button>
    )
}

export default Addtweet;