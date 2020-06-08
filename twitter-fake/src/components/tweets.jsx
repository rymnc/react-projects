import React, { useState } from 'react'
import Tweet from './tweet'
const Tweets = () =>{

    const [tweetobj,setTweetobj] = useState([
        {
            id:1,
            name:"Aaryamann",
            email:"aaryamannc7@gmail.com",
            phone:"8310902220",
            data:"Coll amn",
            handle:"p1ge0nh8er",
            votes:0
        },
        {
            id:2,
            name:"Ding",
            email:"aaryamannc7@gmail.com",
            phone:"8310902220",
            data:"Coll amn",
            handle:"p1ge0nh8er",
            votes:0
        },
        {
            id:3,
            name:"Dong",
            email:"aaryamannc7@gmail.com",
            phone:"8310902220",
            data:"Coll amn",
            handle:"p1ge0nh8er",
            votes:0
        },
        {
            id:4,
            name:"Ping",
            email:"aaryamannc7@gmail.com",
            phone:"8310902220",
            data:"Coll amn",
            handle:"p1ge0nh8er",
            votes:0
        },
        {
            id:5,
            name:"Pong",
            email:"aaryamannc7@gmail.com",
            phone:"8310902220",
            data:"Coll amn",
            handle:"p1ge0nh8er",
            votes:0 
        }
    ])

    const handleVote = (updown,id) =>{
        //console.log(updown)
        // console.log(id)
        const index = tweetobj.findIndex(el=> el.id ===id)
        //console.log(index)
        const newstate = [...tweetobj]
        if(newstate[index].votes===0 && updown===-1){
            return
        } else {
            newstate[index].votes=newstate[index].votes+updown
            setTweetobj(newstate)
        }
        
        
    }
    const addNewTweet = (event) =>{
        const newState = [...tweetobj];
        console.log({tempname})
        
    }
    const tempname=''
    const renderTweets = () =>{
        return tweetobj.map(el=>{
            return <Tweet handleVote={handleVote}  dat={el}/>
        })
    }

    //console.log(tweetobj)
    return(
        <>
        {renderTweets()}
        <form onSubmit={addNewTweet}>
            <input type="text" className='p-1 m-4 text-center' id={tempname}/>
            <button className="btn btn-danger p-1 m-4 text-center" type="submit">Yolo</button>
        </form>
        </>

    )
}

export default Tweets;