
import React, { useState, useEffect } from 'react';
import cl from './Forecast.css';

const Forecast = (units) => {

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayInWeek = new Date().getDay();
  const [lat, setLat] = useState(['44.34']);
  const [long, setLong] = useState(['10.99']);
  const [data, setData] = useState([]);
  const [checkstatus,setCheckStatus]= useState(false);

  const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0, dayInWeek));
  //onst forecastDays =['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday','Monday'];
  console.log("@@@@@" + data);
  const API_KEY = 'a688741f33e47bad9c43af22565b8b95';

  useEffect(() => {
    const fetchData = async () => {
      
      try {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log("lat" +lat);
        console.log("long"+long);
      });
      
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
            setCheckStatus(true);
            //alert(data);
          });
      } catch (error) {
        console.error(error);
       
      }
    }
    fetchData();
    

  }, [lat, long]);


 
  return (

    // <div className={cl.widgetForecast} style={{ marginTop: '50px' }}>
    //   { (checkstatus) ?
    //   (data && (

    //     data.list.slice(0, 5).map((item, id) => (
    //       <div className={cl.widgetItem} key={id}>
    //         <div className={cl.day}><b>{forecastDays[id]}</b></div>
    //         <div className={cl.icon}>
    //           <img src={`icons/${item.weather[0].icon}.png`} alt="Icon" />
    //         </div>
    //         <div className={cl.max}>Max - {Math.round(item.main.temp_max)}°C</div>
    //         <div className={cl.min}>Min - {Math.round(item.main.temp_min)}°C</div>
    //         <div className={cl.description}>{item.weather[0].description}</div>
    //       </div>
    //     ))) )
    //     :
    //      <div>Loading</div>
    //     }
          
    
     <div class="row">
          { (checkstatus) ?
      (data && (

        data.list.slice(0, 5).map((item, id) => (
          <div className='col'>
         <p> <b>{forecastDays[id]}</b></p>
            
         <p>  <img src={`icons/${item.weather[0].icon}.png`} alt="Icon" /></p>
           
         <p>   Max - {Math.round(item.main.temp_max)}°C</p>
         <p>  Min - {Math.round(item.main.temp_min)}°C</p>
         <p>  {item.weather[0].description}</p>
          </div>
        ))) )
        :
         <div>Loading</div>
        }
    

    </div>

    // </div>
  )

}

export default Forecast;