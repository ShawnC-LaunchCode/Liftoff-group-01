import React, {useState} from 'react';

function SetEverydayDresscode({userId}) {

  
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleOptionChange = (e) => {
      const optionValue = e.target.value;
      setSelectedOptions((prevOptions) => {
        if (prevOptions.includes(optionValue)) {
          return prevOptions.filter((option) => option !== optionValue);
        } else {
          return [...prevOptions, optionValue];
        }
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const data = { userId, selectedOptions };
      console.log(data);
  
      fetch("http://localhost:8080/Seteverydaydresscode", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
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
        <h3>Select Your Dresscode Preferences</h3>
    
      <div>
        <label>
          <input
            type="checkbox"
            value="casual"
            checked={selectedOptions.includes('casual')}
            onChange={handleOptionChange}
          />
          Casual
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="businessCasual"
            checked={selectedOptions.includes('businessCasual')}
            onChange={handleOptionChange}
          />
          Business Casual
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="formal"
            checked={selectedOptions.includes('formal')}
            onChange={handleOptionChange}
          />
          Formal
        </label>
      </div>
      <button type="submit">Update Dress Code Preferences</button>
    </form>
    );
  }

  
  export default SetEverydayDresscode;