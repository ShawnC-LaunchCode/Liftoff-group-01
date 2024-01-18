import React, {useState} from 'react';

export default function SetStyle(userId) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = sessionStorage.getItem("username")

    const data = { username, selectedOption };
    console.log(data);

    fetch("http://localhost:8080/StylePreferences", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((result) => {
        console.log(result);
        // Add any additional logic based on the response from the backend
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

    return (
     

  
  
  <form onSubmit={handleSubmit}>
  <label>
        Select your style preference:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="both">Both</option>
          <option value="neither">Neither</option>
        </select>
      </label>
      <button type="submit">Update Style Preferences</button>
    </form>
      
    );
  }
  
