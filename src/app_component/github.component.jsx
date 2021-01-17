import React from 'react'

const Github = () => {
    return (
        <div className="container">
            <img src="assets/git.jpg" onClick={()=> window.open("https://github.com/1gnacio/Clima", "_blank")}/>
        </div>
    );
}

export default Github