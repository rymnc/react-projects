import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { useState } from 'react';




const App = () =>{


	const  [count , setCount] = useState({
		count1: 0,
		count2: 0
	})


	// const handleClick = () =>{
	// 	setCount({...count,count1:count.count1+1});
	// }

	// const handleClick2 = () =>{
	// 	setCount({...count,count2:count.count2+1});
	// }

	const handleClick = (countNumber) =>{
		if(countNumber === 1) {
				
			
			if(count.count1===4) {
				window.confirm("next is max")
	
			}	
			setCount({...count,count1:count.count1+1});
			
		}
		else if (countNumber ===2) {
			setCount({...count,count2:count.count2+1});

		}

	}

	const styler = 'btn btn-primary'
	return (
		<div className="row">
		<div className="col-sm text-center">
		<h1>{count.count1}</h1>
		<button onClick={() => handleClick(1)} className={styler} disabled={count.count1===5?true:false}>Click</button>
		</div>
		<br/>
		<div className="col-sm text-center">
		<h1>{count.count2}</h1>
		<button onClick={() =>handleClick(2)} className="btn btn-primary">Click</button>
		</div>
		</div>



		)

}

ReactDOM.render(<App />,document.getElementById('root'))