import React from 'react';
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from '../components/NavBar';

function ListCloths() {
    const [search, setSearch] = useState('');
    const [records, setRecords] = useState([]);
    const navigate=useNavigate();
    async function fetchProductData() {
     
      let response = await fetch('http://localhost:8080/cloths',{method:'GET'});
      let data = await response.json();
      // do stuff with data
      console.log(data);
      if(data) { setRecords(data) }
      }
      //fetchProductData();
  
      useEffect(() => {
        fetchProductData();
      }, []);

      const LoadEdit = (id) => {
        navigate("/cloths/edit/" + id);
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
          fetch("http://localhost:8080/cloths/" + id, {
              method: "DELETE"
          }).then((res) => {
              //alert('Removed successfully.');
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
  <>
  <NavBar/>
  <div className="container">
<div className="card">
<div className="card-title">
                    <h2>Clothes Listing</h2>
                </div> <div className="card-body">
                    <div className="divbtn">
                        <Link to="/cloths/create" className="btn btn-success ">Add New (+)</Link>
                    </div>&nbsp;
                    <div class="input-group mb-3">
                   
                    <input type="text" onChange={(e) => setSearch(e.target.value)}
              placeholder='Filter By Weather / Category ' width="60" class="form-control"></input></div>

                    <div className="d-flex w-60 vh-50 justify-content-center aligns-item-center">
                <table className="table table-hover  caption-top " >
                  <caption>Clothes Listing</caption>
          <thead class="table-light" >
    <tr >
      <th scope="col" class="w-25">ID</th>
      <th scope="col" class="w-25"> Name</th>
      <th scope="col" class="w-25"> clothesCategory</th>
      <th scope="col" class="w-25"> imageUrl</th>
      <th scope="col" class="w-25"> gender</th>
      <th scope="col" class="w-25"> weatherTag</th> 
      <th scope="col" class="w-25">Edit</th>
      <th scope="col" class="w-25">Delete</th>
    </tr>
  </thead>
  <tbody>
  {records && records.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : (item.weatherTag.toLowerCase().includes(search.toLowerCase()) || (item.clothCategory.name.toLowerCase().includes(search.toLowerCase())));
              }).map(item => (
              
                 <tr >
      <td >{item.id}</td> 
      <td>{item.name}</td>
      <td>{item.clothCategory.name}</td>
      <td><img src={item.imageUrl} alt="img" width="50px" height="50px"></img></td>
      <td>{item.gender}</td>
      <td>{item.weatherTag}</td>
      <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a></td>
       <td>   <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
      </td>
    </tr>
                
            ))}
   
   
  </tbody>
</table></div></div>
            </div>


    </div>
  </>

  )
  

}

export default ListCloths;