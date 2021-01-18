import React, { Component } from 'react'
import './App.css';
import "weather-icons/css/weather-icons.css"
import Weather from './app_component/weather.component';
import Github from './app_component/github.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './app_component/form.component';

//api call api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const API_key = "c99c1de37357117d44b3c117b006ed96";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    }

    this.weatherIcon = {
      thunderstorm: "wi-thunderstorm",
      drizzle:"wi-sleet",
      rain: "wi-storm-showers",
      snow: "wi-snow",
      atmosphere: "wi-fog",
      clear: "wi-day-sunny",
      clouds: "wi-day-fog"
    }
  }

  calCelsius(temp){
    let cel = Math.floor(temp - 273.15)
    return cel
  }

  get_weatherIcon(rangeId){
    switch(true){
      case rangeId >=200 && rangeId <=232:
        this.setState({icon:this.weatherIcon.thunderstorm});
        break;
      case rangeId >=300 && rangeId <=331:
        this.setState({icon:this.weatherIcon.drizzle});
        break;
      case rangeId >=500 && rangeId <=531:
        this.setState({icon:this.weatherIcon.rain});
        break;
      case rangeId >=600 && rangeId <=622:
        this.setState({icon:this.weatherIcon.snow});
        break;
      case rangeId >=701 && rangeId <=781:
        this.setState({icon:this.weatherIcon.atmosphere});
        break;
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.clear});
        break;
      case rangeId >=801 && rangeId <=804:
        this.setState({icon:this.weatherIcon.clouds});
        break;
      default:
        break;
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    if(city && country){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const response = await api_call.json();
    this.setState({
      city:`${response.name}, ${response.sys.country}`,
      icon: this.weatherIcon.thunderstorm,
      main: undefined,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
      error: false
    })

    this.get_weatherIcon(response.weather[0].id)
    }else{
      this.setState({error: true})
    }
    
  }
  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error}/>
        <Weather 
          city={this.state.city} 
          country={this.state.country} 
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}/>
          <Github />
      </div>

    )
  }
}

export default App;
