import React, { Component } from 'react'

function Github() {

    const [cursor, setCursor] = useState('crosshair');

    const changeCursor = () => {
        setCursor(prevState => {
        if(prevState === 'crosshair'){
            return 'pointer';
        }
        return 'crosshair';
        });
    }

    const clickHandler = () => {
        window.open("https://github.com/1gnacio/Clima", "_blank")
    }
    
    return(
        <div className="container">
            <img src="../assets/git.jpg" 
            onClick={clickHandler} 
            onMouseOver={changeCursor} 
            style={{cursor: cursor}}/>
        </div>
    );
}


export default Github