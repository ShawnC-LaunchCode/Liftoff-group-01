import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const SearchCities = ({ onSearchChange })  => {

    const[city,setCity]=useState('');
    const[clicked,setClicked]=useState(false);
    const[citySuggession,setCitySuggession]=useState([1,2,3,4,5,6,7]);
    const [search, setSearch] = useState(null);


    const searchCity = async (e) => {
        const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5a8ab0a34fmsh3d3247c42c9a45cp17e314jsn5a0d114f06e7',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        
    }



    const loadOptions = (inputValue) => {
       
       
           // alert(inputValue.length);
        
        const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5a8ab0a34fmsh3d3247c42c9a45cp17e314jsn5a0d114f06e7',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        return fetch(
          `${url}?namePrefix=${inputValue}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                console.log(response.data);
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
        
      };
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        //alert(searchData);
        onSearchChange(searchData);
       setClicked(true);
      };
    
  return (
   
      <AsyncPaginate
      className='text-dark'
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
        
       
      
   
  )
}

export default SearchCities;