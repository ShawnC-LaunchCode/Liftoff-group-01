
import "./Sample.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherApp.css';
import SearchCities from './SearchCities';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Checkweather from './Checkweather';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OutfitSuggestion from "./OutfitSuggestion";


const WeatherApp = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [units, setUnits] = useState('metric');

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`https://api.openweathermap.org/data/2.5//weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${units}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();

    }, [lat, long])



    const API_KEY = 'a688741f33e47bad9c43af22565b8b95';

    const search = async (e) => {
        if (e.key === 'Enter') {
            try {
                const { data } = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${units}`
                );
                setWeather(data);

                const forecastData = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=${units}`
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
            `https://api.openweathermap.org/data/2.5//weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
        );
        const forecastFetch = fetch(
            `https://api.openweathermap.org/data/2.5//forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
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

    const unitChange = (e) => {
        //alert("hi");
        const selectedValue = e.target.value;
        console.log(selectedValue);
        setUnits(selectedValue);
        //handleOnSearchChange();

    }

    return (
        <div ><NavBar /><h3><b>Hi {window.sessionStorage.getItem("username")}, Welcome To Weather2Wear Application</b></h3>
            <div class="header"><b>Weather2Wear Application</b></div>
            <div class="backimage">
                <div class="container">
                    <div class="row"><div className='col-md-5 '>
                        <div class="weather__header">
                            <form class="weather__search">
                                <br />&nbsp;
                            </form>
                            <div class="weather__units">
                                <div class="row"><div class="col">
                                <span class="weather_unit_celsius"><input type="radio" name="exampleRadios" id="metric" value="metric" checked={units === 'metric'} onClick={unitChange} /><b>Celsius</b></span>&nbsp;&nbsp;</div><div class="col">
                                <span class="weather_unit_farenheit"><input type="radio" name="exampleRadios" id="imperial" value="imperial" checked={units === 'imperial'} onClick={unitChange} /><b>Farenheit</b></span>
                                </div></div>
                            </div>
                        </div>
                        {(typeof data.main != 'undefined') ?
                            <div class="weather__body">
                                <h1 class="weather__city"><b> {data.name} , {data.sys.country} </b></h1>

                                <Checkweather units={units}></Checkweather>
                            </div> :
                            <div>Loading...</div>
                        }



                    </div>

                        <div className='col-md-6 '>
                            <div class="weather__header ">
                                <form class="weather__search ">

                                </form>

                                <div class="weather__units">
                                    <SearchCities onSearchChange={handleOnSearchChange} /><br/>
                                    {currentWeather && (


                                        <CurrentWeather data={currentWeather} units={units} />

                                    )}

                                </div>
                            </div>


                        </div>

                    </div><br />

                    {(typeof data.main != 'undefined') ? 
                <OutfitSuggestion /> :
                <div>Loading...</div>}
                <br/>
                    <div class="row">


                        <div class="col px-md-5 bg-primary rounded-6"><br /><br />

                            {forecast && <Forecast units={units} />}
                        </div>

                    </div>

                </div></div>
                <Footer/>
                </div>
    );
}
export default WeatherApp;