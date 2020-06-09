import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Posts from './components/Posts'

const App = () =>{

    const [posts,setPosts] = useState([])

    useEffect(()=>{

        const getData = async () =>{
       
        const result = await axios('https://jsonplaceholder.typicode.com/posts')
        setPosts(result.data)
      }
        getData();
    },[]);

    

  
    return (
        <div>
            <h1 className="display-4 text-center">Fetch</h1>
            {/* <h1 className="display-4 text-center">{posts[0].body}</h1> */}
            <Posts data={posts}/>
        </div>

    )
}

ReactDOM.render(<App/>,document.getElementById('root'))