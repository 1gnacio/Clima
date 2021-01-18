import React, { Component } from 'react'

function Github() {

    const [cursor, setCursor] = useState('crosshair');
    
    clickHandler = () => {
        window.open("https://github.com/1gnacio/Clima", "_blank")
    }

    mouseOverHandler = (setCursor) => {
        setCursor(prevState => {
          if(prevState === 'crosshair'){
            return 'pointer';
          }
          return 'crosshair';
        })
    };
    return(
        <div className="container">
            <img src="../assets/git.jpg" 
            onClick={this.clickHandler} 
            onMouseOver={this.mouseOverHandler(setCursor)} 
            style={{cursor: cursor}}/>
        </div>
    );
}


export default Github