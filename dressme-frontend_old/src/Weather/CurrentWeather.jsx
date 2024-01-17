import React from 'react';


const CurrentWeather = ({ data, units }) => {
    return (

        <div>
            <div class="weather__body"><br />
                <h1 class="weather__city"><b>{data.city}</b></h1><br />
                <div class="weather__datetime"><h2><br />
                </h2>
                </div>
                {(units === 'metric') ?
                    <div class="weather__forecast"><h1>
                        {Math.round(data.main.temp)}°<span>C</span>
                    </h1></div>
                    :
                    <div class="weather__forecast"><h1>
                        {Math.round(data.main.temp * 1.8 + 32)}°<span>F</span>
                    </h1></div>
                }
                <div class="weather__icon"> <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="weather-icon"
                />
                </div>

                <div class="weather__minmax">
                    <b>{data.weather[0].description}</b>
                </div>
            </div>

            <div class="weather__info">
                <div class="weather__card">
                    <i class="fa-solid fa-temperature-full"></i>
                    {(units === 'metric') ?
                        <div>
                            <p><b>Feels Like</b></p>
                            <p class="weather__realfeel"><b> {Math.round(data.main.feels_like)}°C</b></p>
                        </div>
                        :
                        <div>
                            <p><b>Feels Like</b></p>
                            <p class="weather__realfeel"><b> {Math.round(data.main.feels_like * 1.8 + 32)}°F</b></p>
                        </div>
                    }
                </div>
                <div class="weather__card">
                    <i class="fa-solid fa-droplet"></i>
                    <div>
                        <p><b>Humidity</b></p>
                        <p class="weather__humidity"><b>{data.main.humidity}%</b></p>
                    </div>
                </div>
                <div class="weather__card">
                    <i class="fa-solid fa-wind"></i>
                    <div>
                        <p><b>Wind Speed</b></p>
                        <p class="weather__wind"><b>{data.wind.speed} m/s</b></p>
                    </div>
                </div>
                <div class="weather__card">
                    <i class="fa-solid fa-gauge-high"></i>
                    <div>
                        <p><b>Pressure</b></p>
                        <p class="weather__pressure"><b>{data.main.pressure} </b></p>
                    </div>
                </div>
            </div>


        </div>


    );
};


export default CurrentWeather;