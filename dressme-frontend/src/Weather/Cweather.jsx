import React, { useState } from 'react';
import axios from 'axios';


const Cweather = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const input = event.target.value;
    setQuery(input);

    if (input.length > 2) {
      const rapidApiKey = '5a8ab0a34fmsh3d3247c42c9a45cp17e314jsn5a0d114f06e7';
   
      const rapidApiUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${input}`;

      try {
        const response = await axios.get(rapidApiUrl, {
          headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          },
        });

        setSuggestions(response.data.data);
      } catch (error) {
        console.error('Error fetching location suggestions: ', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (selectedLocation) => {
    setQuery(`${selectedLocation.city}, ${selectedLocation.country}`);
    setSuggestions([]);
  };

  return (
    <div>
      
      <input
        type="text"
        placeholder="Enter city name"
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id} onClick={() => handleSelectSuggestion(suggestion)}>
            {suggestion.city}, {suggestion.country}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Cweather;
