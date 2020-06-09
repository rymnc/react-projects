import React from 'react';


const Posts = props =>{

    return(
        <div className="container text-center ">
            <div className="text-center">
                {props.data.map(el=>{
                    return(
                    <div className=" m-4 card" key={el.id}>
                        <h2 className="card-header m-1">{el.title}</h2>
                        <h5 className='card-subtitle text-muted m-1'> {el.userId}</h5>
                        <h6 className="card-text m-1">{el.body}</h6>
                    </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Posts;