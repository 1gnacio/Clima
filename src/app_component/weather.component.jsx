import React from 'react'
import "./weather.style.css"

const Weather = (props) => {
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <h1>{props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {props.temp_celsius ? <h1 className="py-2">{props.temp_celsius}&deg;C</h1> : null}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3" id="capitalize">{props.description}</h4>
            </div>
        </div>
    );
}

function minmaxTemp(min,max) {
    if(min && max){
        return(
            <h3>
                <span className="px-4">{min}&deg;C</span>
                <span className="px-4">{max}&deg;C</span>
            </h3>
        )
    }
}

export default Weather;