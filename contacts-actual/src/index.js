import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './components/Contacts'
import Search from './components/Search'

const App = () =>{


    const [contacts,setContacts]     = useState([])
    const [newName,setName]          = useState('');
    const [newEmail,setEmail]        = useState('');
    const [searchTerm,setSearchTerm] = useState('');

    const handleNameChange = event =>{
        event.preventDefault();
        setName(event.target.value)
    };

    const handleEmailChange = event =>{
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(newName);
        console.log(newEmail)
        setContacts([...contacts, {name:newName,email:newEmail}])
        setName('');
        setEmail('');
       
    }

    const handleDelete = (deleteid) =>{
        console.log('delete');
        const newContacts = contacts.filter(el=>{
            return el.email !== deleteid
        })
        setContacts(newContacts)
    };

    const handleUpdate = (updateid) =>{
       
        console.log(updateid)
        const newContacts = [...contacts];
        const index = contacts.findIndex(el=>el.email===updateid);
        console.log(index)

        let n;
        let e;
        n = window.prompt("Enter New Name");
        console.log(n);
        e = window.prompt("Enter New Email");
        console.log(e)

        newContacts[index]={name:n,email:e}
        //console.log(newContacts[index])
        setContacts(newContacts)
       
    }




    const updateHandleSearch = () =>{
     
        const newContacts =  contacts.filter(el=>{
            return el.name.toLowerCase().includes(searchTerm)
        })
        
        setContacts(newContacts)
    }

    const handleSearch = (s) =>{
        setSearchTerm(s)
    }



    return(
        <div className="container text-center mb-2 p-4">
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" value={newName} onChange={handleNameChange} className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input type="text" value={newEmail}  onChange={handleEmailChange} className="form-control" placeholder="Email"/>

                    </div>
                </div>
                <button className="btn btn-primary m-2" type="Submit" onClick={handleSubmit} >Add contact</button>
            </form>
            <Search handleSearch={handleSearch} />
            <button className="btn-secondary btn" onClick={updateHandleSearch}>Search</button>
            <h1 className="display-4 text-center">
                Contacts:
            </h1>
            {contacts.map(el=>{
                return <Contacts name={el.name} email={el.email} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            })}

        </div>
    )
};

ReactDOM.render(<App/>,document.getElementById('root'))