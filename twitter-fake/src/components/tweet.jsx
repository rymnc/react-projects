import React, {useState} from 'react';


const Tweet = props =>{
    // console.log(props)

    // const [votes,setVotes] = useState(0);

    // const changeVote = (updown) =>{
    //     if(votes===0 && updown===-1){
    //         return
    //     } else{
    //     setVotes(votes+updown);
    //     }
    // }

    return(

        <div className="card  p-4 ">
            <div className="card-body">
                <h5 className="card-title">{props.dat.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.dat.handle}</h6>
                <p className="card-text">{props.dat.data}</p>
                <a href="" className="card-link">{props.dat.phone}</a>
                <a href="" className="card-link">{props.dat.email}</a>

                <button onClick={()=>{props.handleVote(-1,props.dat.id)}} className="card-link btn btn-danger"><i className="fas fa-arrow-down"></i></button>

                <button  onClick={()=>{props.handleVote(1,props.dat.id)}}className="card-link btn btn-primary"><i className="fas fa-arrow-up"></i></button>

                <span className="card-link badge badge-info">{props.dat.votes}</span>
            </div>
            
        </div>
    )
};

export default Tweet;