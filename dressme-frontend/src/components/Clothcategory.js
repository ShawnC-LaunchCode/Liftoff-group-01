

import { useState,useEffect } from 'react'

export default function Clothcategory () {
    
  
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  
  // async function fetchAPI() {
  const fetchAPI = async () => {
    setLoading(true);
    try{
      //const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      let response = await fetch('http://localhost:8080/clothCategories',{method:'GET'});
      const data = await response.json()
      if(data) { setRecords(data) }
    } catch(error) {
      console.error(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchAPI();
  }, []);

    return (
        <div className="clothcategory">

        {loading ? 'Loading...' : (
          <div className="grid">
            {records && records.map(item => (
              <div className="item" key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
  
      </div>
    )
  
}



