import React from 'react';
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Addclothcategory() {
    const[name,setName]=useState("");
    
    const[validation,valchange]=useState(false);
    const navigate=useNavigate();
    const [records, setRecords] = useState([]);
    

    const handlesubmit=(e)=>{
      e.preventDefault();
      const data={name};
      
console.log(data);
      fetch("http://localhost:8080/clothCategories/create",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{
        //alert('Saved successfully.')
        Swal.fire({icon: "success",
        title:"Saved successfully."});
        navigate('/listclothcategory');
      }).catch((err)=>{
        console.log(err.message)
      })
      const newContact = {
        name: data.name
      }
      const newContacts = [...records, newContact];
      setRecords(newContacts);

    }



  return (
    <div>
<div className="row">
                <div className="d-flex w-100 vh-50 justify-content-center aligns-item-center">
                    <div className='w-50 border text-white p-5'>
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2> Add ClothesCategory</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                    

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                        {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    

                                   
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/listclothcategory" className="btn btn-danger">Back</Link> 
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>
                    </div>
                </div>
               
            </div>


    </div>
  )
}

export default Addclothcategory;