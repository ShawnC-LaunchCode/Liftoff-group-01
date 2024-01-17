import React from 'react';
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const ListCloset = () => {
  const [search, setSearch] = useState('');
    const [records, setRecords] = useState([]);
    const navigate=useNavigate();
    async function fetchProductData() {
     
      let response = await fetch('http://localhost:8080/mycloset',{method:'GET'});
      let data = await response.json();
      // do stuff with data
      console.log(data);
      if(data) { setRecords(data) }
      }
     
  
      useEffect(() => {
        fetchProductData();
      }, []);

      const LoadEdit = (id) => {
        navigate("/EditCloset/" + id);
    }
    const Removefunction = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      
          fetch("http://localhost:8080/mycloset/" + id, {
              method: "DELETE"
          }).then((res) => {
              //alert('Removed successfully.')
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              window.location.reload();
          }).catch((err) => {
              console.log(err.message)
          })
        }
      });
  }



  return (
    <div>
        <NavBar/>
<div className="container">
<div className="card">
<div className="card-title">
                    <h2>MyCloset Listing</h2>
                </div> <div className="card-body">
                    <div className="divbtn">
                        <Link to="/AddCloset" className="btn btn-success ">Add New (+)</Link>&nbsp;
                        {/* <Link to="/cloths" className="btn btn-primary ">Back To Clothes</Link> */}
                    </div>&nbsp;
                    <div class="input-group mb-3">
                   
                   <input type="text" onChange={(e) => setSearch(e.target.value)}
             placeholder='Filter By Title / Weather / Color ' width="60" class="form-control"></input></div>
                    
                    <div className="d-flex w-60 vh-50 justify-content-center aligns-item-center">
                <table className="table table-hover  caption-top table-sm " >
                  <caption>MyCloset Listing</caption>
          <thead class="table-light" >
    <tr >
      <th scope="col" class="w-25">ID</th>
      <th scope="col" class="w-25">Title</th>
      <th scope="col" class="w-25">Color</th>
      <th scope="col" class="w-25">Weather</th>
      <th scope="col" class="w-25">Closet Location</th>
      <th scope="col" class="w-25">IsFavourite</th>
      <th scope="col" class="w-25">Edit</th>
      <th scope="col" class="w-25">Delete</th>
    </tr>
  </thead>
  <tbody>
  {records && records.filter((item) => {
                return search.toLowerCase() === ''
                  ? item.username.includes(window.sessionStorage.getItem("username"))
                  : (item.weatherTag.toLowerCase().includes(search.toLowerCase()) || (item.name.toLowerCase().includes(search.toLowerCase())) || (item.color.toLowerCase().includes(search.toLowerCase())));
              }).map(item => (
 
              
                 <tr >
      <td scope="row">{item.id}</td>
      <td>{item.name}</td>
      <td>{item.color}</td>
      <td>{item.weatherTag}</td>
      <td>{item.closetLocation}</td>
      <td>{(item.fav)?"Yes":"No"}</td>
      <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>&nbsp;</td> 
       <td>  <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
      </td>
    </tr>
                
            ))}
   
   
  </tbody>
</table></div></div>
            </div>


    </div>
    <Footer/>
    </div>
  )
}

export default ListCloset