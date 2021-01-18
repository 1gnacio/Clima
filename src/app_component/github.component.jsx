import React, { useState } from 'react'
import logo from '../assets/git.jpg'

function Github() {

    const [cursor, setCursor] = useState('crosshair');

    const changeCursor = () => {
        setCursor(prevState => {
            return 'pointer';
        });
    }

    const clickHandler = () => {
        window.open("https://github.com/1gnacio/Clima", "_blank")
    }
    
    return(
        <div className="container">
            <img src={logo} 
            onClick={clickHandler} 
            onMouseOver={changeCursor} 
            style={{cursor: cursor}}/>
        </div>
    );
}


export default Github