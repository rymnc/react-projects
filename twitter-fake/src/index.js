import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from './components/tweets';
import Addtweet from './components/Addtweet'

const App = () =>{

    return (
        <div>
         
            <Tweets/>
            
        </div>
    )

}

ReactDOM.render(<App/>,document.getElementById('tweets'))
ReactDOM.render(<Addtweet/>,document.getElementById('add'))