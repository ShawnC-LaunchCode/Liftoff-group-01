import React, { useState, useEffect } from 'react';

const ZipcodeForm = ({ onSave, onUpdate }) => {
  const [zipcode, setZipcode] = useState('');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Fetch and set the initial zipcode from the backend when the component mounts
    fetchZipcode();
  }, []);

  const fetchZipcode = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/user/zipcode', {
        method: 'GET',
        credentials: 'include', // Include credentials for CORS
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setZipcode(data.zipcode || ''); // Set the zipcode if available
      } else {
        console.error('Error fetching zipcode:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching zipcode:', error);
    }
  };

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
    setStatus(null);
  };

  const handleSaveOrUpdate = async (e) => {
    e.preventDefault();

    const formData = { zipcode };

    try {
      // Check if the user already has a zipcode to determine whether to save or update
      const response = await fetch('http://localhost:8080/api/user/zipcode', {
        method: 'GET',
        credentials: 'include', // Include credentials for CORS
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.zipcode) {
          // User has a zipcode, update it
          await updateZipcode(formData);
        } else {
          // User does not have a zipcode, save it
          await saveZipcode(formData);
        }
      } else {
        console.error('Error checking existing zipcode:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error checking existing zipcode:', error);
    }
  };

  const saveZipcode = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/api/user/zipcode', {
        method: 'POST',
        credentials: 'include', // Include credentials for CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // Additional actions on successful save
      } else {
        console.error('Error saving zipcode:', response.status, response.statusText);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error saving zipcode:', error);
      setStatus('error');
    }
  };

  const updateZipcode = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/api/user/zipcode', {
        method: 'PUT',
        credentials: 'include', // Include credentials for CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // Additional actions on successful update
      } else {
        console.error('Error updating zipcode:', response.status, response.statusText);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error updating zipcode:', error);
      setStatus('error');
    }
  };

  return (
    <div className="form">
      <h1>Zipcode Form</h1>

      <div className="messages">
        {status === 'error' && <div className="error">Error saving/updating zipcode.</div>}
        {status === 'success' && <div className="success">Zipcode saved/updated successfully!</div>}
      </div>

      <form>
        <label>Zipcode</label>
        <input
          type="text"
          value={zipcode}
          onChange={handleZipcodeChange}
        />

        <button onClick={handleSaveOrUpdate} type="submit">
          Save/Update Zipcode
        </button>
      </form>
    </div>
  );
};

export default ZipcodeForm;



  
