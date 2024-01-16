import React, { useState} from "react";

export default function SetZipCode(userId) {

  const [newZipcode, setNewZipcode] = useState('');

  const handleZipcodeChange = (e) => {
    setNewZipcode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { userId, newZipcode };
    console.log(data);

    fetch("http://localhost:8080/Zipcode", {
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
      <h2>Update Zipcode</h2>
      <label>
        New Zipcode:
        <input
          type="text"
          value={newZipcode}
          onChange={handleZipcodeChange}
        />
      </label>
      <button type="submit">Update Zipcode</button>
    </form>
  );
};



    
