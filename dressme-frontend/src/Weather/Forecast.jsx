
import React, { useState, useEffect } from 'react';
import cl from './Forecast.css';

const Forecast = () => {
 
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const dayInWeek = new Date().getDay();
  const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

  const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0, dayInWeek));
  //onst forecastDays =['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday','Monday'];
	console.log("@@@@@"+data);
  const API_KEY = 'a688741f33e47bad9c43af22565b8b95';

  useEffect(() => {
    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            });
    }
    fetchData();

},[lat, long]);



	return (
		<div className={cl.widgetForecast} style={{ marginTop: '50px' }}>
			{/* {data.list.slice(0, forecastDays).map((item, id) => (
				<div className={cl.widgetItem} key={id}>
					<div className={cl.day}>{forecastDays[id]}</div>
					<div className={cl.icon}>
						<img src={`icons/${item.weather[0].icon}.png`} alt="Icon" />
					</div>
					<div className={cl.max}>+{Math.round(item.main.temp_max)}</div>
					<div className={cl.min}>+{Math.round(item.main.temp_min)}</div>
					<div className={cl.description}>{item.weather[0].description}</div>
				</div>
			))} */}
		</div>
	)
  
}

export default Forecast;