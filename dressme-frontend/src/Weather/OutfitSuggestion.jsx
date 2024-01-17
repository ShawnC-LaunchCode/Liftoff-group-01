import React, { useState, useEffect } from 'react';

const OutfitSuggestion = () => {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [outfit, setOutfit] = useState("");
  const [accessories, setAccessories] = useState("");
  const API_KEY = 'a688741f33e47bad9c43af22565b8b95';
  const [weatherCondition, setWeatherCondition] = useState("");
  const [temperature, setTemperature] = useState("");
  //const weatherCondition="Rain";
  //const temperature="-10";
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    const fetchData = async () => {
      console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log("result" + result.main);
          console.log(result.name);
          setTemperature(Math.round(result.main.temp));
          setWeatherCondition(result.weather.main);
          handleOutfitSuggestion();
        });
    }
    if(lat!="" && long!=""){
      fetchData();
    }
    


  }, [lat,long])
  



  let outfitDetails = [];
  console.log("data:" + lat);


  const handleOutfitSuggestion = () => {

    // Determine outfit details based on weather conditions
    if (weatherCondition==('Rain')) {

      setOutfit('Raincoat and umbrella');
      setAccessories('Waterproof shoes, and a waterproof bag');

    } else if (temperature > 30) {

      setOutfit('Light dress or shorts and a tank top');
      setAccessories('Sunglasses, hat, and sunscreen');

    } else if (temperature > 20) {

      setOutfit('T-shirt and shorts or a summer dress');
      setAccessories('SSunscreen and sunglasses');

    } else if (temperature > 10) {

      setOutfit('Sweater or light jacket and jeans');
      setAccessories('Scarf and gloves');

    } else {
      setOutfit('Winter coat, sweater, and pants');
      setAccessories('Hat, scarf, gloves, and boot');

    }

  }



  return (
    <div  className='bg-blue'><br/>
      <h1><b>Today's Outfit Suggestion </b></h1> <br/>
     {(typeof data.main != 'undefined') ?
     <div ><h5>
      <div><b>Outfits: &nbsp;</b>{outfit} </div><br/>
      <div><b>Accessories: &nbsp;</b> {accessories}</div></h5></div>
      :
      <div>Loading...</div>
}
<br/><br/>
    </div>
  )
}

export default OutfitSuggestion;