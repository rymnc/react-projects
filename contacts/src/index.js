import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
//  import Count from './components/Count'

const Index = () =>{
    
    const [textInput,setTextInput] = useState("")
    const handleClick = (event) =>{
        event.preventDefault();
        console.log(textInput)
        //console.log(typeof textinput.current.value)

    }

    const handleChange = event =>{
        event.preventDefault();
        setTextInput(event.target.value)
        //console.log(event.target.value)

    }
    

    return(
        <div className="bg-secondary  text-center p-4   ">
            <form action="">
                <label className="display-4">Name:</label>
                <input value={textInput} onChange={handleChange} type="text"  className="display-4"></input>
                <button className="btn btn-primary m-4" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

ReactDOM.render(<Index/>,document.getElementById('root'))