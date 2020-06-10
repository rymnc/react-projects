import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () =>{

    const [images,setImage] = useState([])
    const [search,setSearch] = useState('')

  
    useEffect(()=>{
        const check = async () =>{
        
   
        
        
    }
    check();
    },[])

 //   console.log(images)


    const renderImages = () =>{

        return images.map (el=>{
            return(
            <div className="card m-3 ">
                <img src={el.src.medium} alt=""/>
                <div className="card-body">
                    <p className="card-text text-center">{el.photographer}</p>
                </div>
            </div>
            )
        })

    }

    const handleChange = (event) =>{
        event.preventDefault();
        setSearch(event.target.value)
      //  console.log(event.target.value)
    }
    
    const handleSearch = async (event) =>{
     //   console.log(search)
        event.preventDefault();
        const url = 'https://api.pexels.com/v1/search'
        const ans = await Axios(url,{
            params:{
                query: search
            },
            headers:{
                Authorization:'563492ad6f91700001000001fd88847a421d427cb1d82282e2505459'
            }
        })
    
     //   console.log(ans.data.photos)
        // console.log(typeof images)
        const newImage = ans.data.photos
        setImage(newImage)
     //   console.log(images)
        renderImages()
      

    }
    
    return (
        <>
        <div className="container text-center">
            <form className='form-group mt-2' >
                <input type="text" value={search} className="form-control" placeholder='Search' onChange={handleChange}/>
                <button className="btn btn-success mt-2 mb-2" onClick={handleSearch}>Search</button>
            </form>
        </div>
        <div className='container'>


            
            <div className="row justify-content-center"> {renderImages()}
            </div>
           

           </div>
           </>
        
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))