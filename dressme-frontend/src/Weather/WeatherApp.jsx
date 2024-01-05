// WeatherApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherApp.css'; // Create this file for custom styles if needed
import SearchCities from './SearchCities';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
 

  const API_KEY = 'a688741f33e47bad9c43af22565b8b95'; // Replace with your OpenWeatherMap API key

  const search = async (e) => {
    if (e.key === 'Enter') {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
        );
        setWeather(data);

        const forecastData = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`
        );
        setForecast(forecastData.data.list);
        setQuery('');
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
  };

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5//weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5//forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <section class="vh-100 gradient-custom">
    <div >




        
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {weather.main && (
        <div className="weather-details">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div className="weather">
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="weather-icon"
            />
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="temperature">
            <p>Temperature: {Math.round(weather.main.temp)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
      {/* <div className="forecast">
        <h3>5-Day Forecast</h3>
        <div className="forecast-details">
          {forecast.map((item, index) => (
            <div key={index} className="forecast-item">
              <p>{item.dt_txt}</p>
              <img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt="forecast-icon"
              />
              <p>{Math.round(item.main.temp)}°C</p>
            </div>
          ))}
        </div>
      </div> */}

      
      
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-primary text-white rounded-7"  >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 ">Weather</h2>
              <p class="text-white-50 mb-5"></p>

              <div class="form-outline form-white mb-4">
              <div className="search-box">
        {/* <input
          type="text"
          className="search-bar"
          placeholder="Search for a location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        /> */}
         <SearchCities onSearchChange={handleOnSearchChange} />
         {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      </div>
              </div>

              <div class="form-outline form-white mb-4">
               
              </div>

              <p class="small mb-5 pb-lg-2"></p>

              

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  </div></div>
</section>



    
    
  );
};

export default WeatherApp;
