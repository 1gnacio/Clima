import React, { Component } from 'react'

class Github extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    clickHandler = () => {
        window.open("https://github.com/1gnacio/Clima", "_blank")
    }

    mouseOverHandler = () => {
        setCursor(prevState => {
          if(prevState === 'crosshair'){
            return 'pointer';
          }
          return 'crosshair';
        })
    };

    render() {
        return(
            <div className="container">
                <img src="../assets/git.jpg" onClick={this.clickHandler} onMouseOver={this.mouseOverHandler}/>
            </div>
        );
    }
}

export default Github