import React, { Component } from 'react'

class Github extends Component {
    constructor(props) {
        super(props)
    }
    
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

    render() {
        const [cursor, setCursor] = useState('crosshair');
        return(
            <div className="container">
                <img src="../assets/git.jpg" 
                onClick={this.clickHandler} 
                onMouseOver={this.mouseOverHandler(setCursor)} 
                style={{cursor: cursor}}/>
            </div>
        );
    }
}

export default Github