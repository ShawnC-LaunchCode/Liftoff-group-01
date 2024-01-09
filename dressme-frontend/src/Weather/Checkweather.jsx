import React from "react";
//import apiKeys from "./apiKeys";
import Clock from "react-live-clock";
//import Forcast from "./forcast";
//import loader from "./images/WeatherIcons.gif";
import ReactAnimatedWeather from "react-animated-weather";
const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};
const defaults = {
  color: "white",
  size: 112,
  animate: true,
};
const apiKeys = {
  key: "a688741f33e47bad9c43af22565b8b95",
  base: "https://api.openweathermap.org/data/2.5/",
};
class Checkweather extends React.Component {


  state = {
    lat: undefined,
    lon: undefined,
    errorMessage: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: "CLEAR_DAY",
    sunrise: undefined,
    sunset: undefined,
    errorMsg: undefined,
    units:undefined
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        //If user allow location service then will fetch data & send it to get-weather function.
        .then((position) => {
          this.setState({units:this.props.units});
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
          this.getWeather(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
        });
    } else {
      alert("Geolocation not available");
    }

    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }



  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
  getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=${this.props.units}&APPID=${apiKeys.key}`
    );
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperature: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      country: data.sys.country,
      speed: data.wind.speed,
      feelslike: data.main.feels_like,
      feelslikeF:Math.round(data.main.feels_like * 1.8 + 32),
      pressure: data.main.pressure,
      icon: data.weather[0].icon,
      description: data.weather[0].description
      // sunrise: this.getTimeFromUnixTimeStamp(data.sys.sunrise),

      // sunset: this.getTimeFromUnixTimeStamp(data.sys.sunset),
    });

  };

  render() {
    if (this.state.temperatureC) {

      return (
        <React.Fragment>


          <div class="weather__datetime"><h2><b>
            <Clock format="HH:mm:ss" interval={1000} ticking={true} />

            <div className="current-date">{dateBuilder(new Date())}</div></b></h2>
          </div>
          {(this.props.units === 'metric') ?
            <div class="weather__forecast"><h1>
              {this.state.temperature}°<span>C</span>
            </h1></div>
            :
            <div class="weather__forecast"><h1>
              {this.state.temperatureF}°<span>F</span>
            </h1></div>
          }
          <div class="weather__icon"> <img
            src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
            alt="weather-icon"
          />
          </div>

          <div class="weather__minmax">

            <b>{this.state.description}</b>
          </div>
          <div class="weather__info">
            <div class="weather__card">
              <i class="fa-solid fa-temperature-full"></i>
              {(this.props.units === 'metric') ?
              <div>
                <p><b>Feels Like</b></p>
                <p class="weather__realfeel"><b> {this.state.feelslike.toFixed()}°C</b></p>
              </div>
              : <div>
              <p><b>Feels Like</b></p>
              <p class="weather__realfeel"><b> {this.state.feelslikeF.toFixed()}°F</b></p>
            </div>
        }
            </div>
            <div class="weather__card">
              <i class="fa-solid fa-droplet"></i>
              <div>
                <p><b>Humidity</b></p>
                <p class="weather__humidity"><b>{this.state.humidity}%</b></p>
              </div>
            </div>
            <div class="weather__card">
              <i class="fa-solid fa-wind"></i>
              <div>
                <p><b>Wind Speed</b></p>
                <p class="weather__wind"><b>{this.state.speed} m/s</b></p>
              </div>
            </div>
            <div class="weather__card">
              <i class="fa-solid fa-gauge-high"></i>
              <div>
                <p><b>Pressure</b></p>
                <p class="weather__pressure"><b>{this.state.pressure}</b></p>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {

      return (
        <React.Fragment>
          <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
            Detecting your location
          </h3><br></br>
          <h3 style={{ color: "white", marginTop: "10px" }}>
            Your current location wil be displayed on the App <br></br> & used
            for calculating Real time weather.
          </h3>
        </React.Fragment>
      );
    }
  }
}

export default Checkweather;
