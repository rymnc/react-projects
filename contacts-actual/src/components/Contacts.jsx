import React from 'react';

const Contacts = (props) =>{
    return(
        <div className="container m-2">
            
            <div className="row">
                <div className="col text-center">
                 <li className="list-group-item">
                     <div className="row">
                         <div className="col-sm">
                        {props.name}
                     </div>
                     <div className="col-sm">
                        {props.email}
                     </div>
                     </div>
                     <button className="btn btn-danger mx-2" onClick={()=>props.handleDelete(props.email)}>Delete</button>
                     <button className="btn btn-warning mx-2" onClick={()=>props.handleUpdate(props.email)}>Update</button>
                     
                 </li>
            </div>
        </div>
        </div>
    )
}


export default Contacts;