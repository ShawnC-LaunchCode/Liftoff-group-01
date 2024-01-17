import React from 'react';
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Addcloths() {
    const[name,setName]=useState("");
    
    const[validation,valchange]=useState(false);
    const navigate=useNavigate();
    const [records, setRecords] = useState([]);
    const [category, setCategory] = useState("");
    const [clothCategory, setClothCategory] = useState({ id:"", name:"" });
    const [imageUrl, setImageurl] = useState("");
    const [weatherTag, setWeathertag] = useState("");
    const [gender, setGender] = useState("");
    const [state, setState] = useState();
    const[cid,setCid] = useState();
    const[ccategory,setCcategory]=useState();

    const handlesubmit=(e)=>{
      e.preventDefault();
      //alert(clothCategory);
     const data={name,clothCategory,imageUrl,gender,weatherTag};
      //const data={name,imageUrl,gender,weatherTag};
console.log(data);
      fetch("http://localhost:8080/cloths/create",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{
        //alert('Saved successfully.');
        Swal.fire({icon: "success",
        title:"Saved successfully."});
        navigate('/cloths');
      }).catch((err)=>{
        console.log(err.message)
      })
      const newContact = {
        name: data.name,
        clothCategory: {id : data.clothCategory.id, name : data.clothCategory.name},
        imageUrl: data.imageUrl,
        gender: data.gender,
        weatherTag: data.weatherTag
      }
      const newContacts = [...records, newContact];
      //console.log(newContacts);
      //alert(newContacts);
      setRecords(newContacts);

    }
    const handleChange = (e) => {
       
        var evt = document.getElementById("Categoryname");
        const ctext=evt.options[evt.selectedIndex].text;
       // alert(ctext);
        setCcategory(evt.options[evt.selectedIndex].text);
        

        const selectedValue = e.target.value;
       // alert(selectedValue);
        setCid(selectedValue);
        setClothCategory({id:selectedValue,name:ctext});
    
        console.log(clothCategory);   
        
      };
    const handleWeatherChange = (e) => {
        const selectedValue = e.target.value;      
       // alert(selectedValue); 
        setWeathertag(selectedValue);
    };

    const handleGenderChange= (e) => {
        const selectedValue = e.target.value;      
        // alert(selectedValue); 
         setGender(selectedValue);
    };
    async function fetchProductData() {
     
        let response = await fetch('http://localhost:8080/clothCategories',{method:'GET'});
        let category = await response.json();
        // do stuff with data
        console.log(category);
        if(category) { setCategory(category) ;
        setClothCategory({id:category[0].id,name:category[0].name})}
        setWeathertag("SUMMER");
        setGender("MEN");
        }
        //fetchProductData();
    
        useEffect(() => {
          fetchProductData();
        }, []);

  return (
    <div>
<div className="row">
                <div className="d-flex w-100 vh-50 justify-content-center aligns-item-center">
                    <div className='w-50 border text-white p-5'>
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2> Add Clothes Category</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                    

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                        {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>&nbsp;&nbsp;
                                   
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <select className="custom-select" id="gendername" onChange={handleGenderChange} >
                                            
                                                <option key="MEN" value="MEN">Men</option>
                                                <option key="WOMEN" value="WOMEN">Women</option>
                                        
                                            </select>
                                            
                                        </div>
                                    </div>&nbsp;&nbsp;
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Weather Tag</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <select className="custom-select" value={weatherTag} onChange={handleWeatherChange} >
                                            
                                                <option key="SUMMER" value="SUMMER">Summer</option>
                                                <option key="SPRING" value="SPRING">Spring</option>
                                                <option key="AUTUMN" value="AUTUMN">Autumn</option>
                                                <option key="SNOW" value="SNOW">Snow</option>
                                                <option key="RAIN" value="RAIN">Rain</option>
                                                <option key="WINTER"  value="WINTER">Winter</option>
                                        
                                            </select>
                                        </div>
                                    </div>&nbsp;&nbsp;
                                    <div className="col-lg-12">
                                        <div className="form-group" >
                                            <label>Clothes Category</label>&nbsp;
                                            <select className="custom-select" id="Categoryname" onChange={handleChange}>
                                            {category && category.map(item => (
                                                <option value={item.id} text={item.name}>{item.name}</option>
                                            ))}
                                            </select>&nbsp;<a href="/listclothcategory">Add Clothes Category</a>
                                            <input type="hidden" value={cid} ></input><input type="hidden" value={ccategory} ></input>
                                        </div>
                                    </div>&nbsp;&nbsp;
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image URL</label>
                                            <input required value={imageUrl} onMouseDown={e=>valchange(true)} onChange={e=>setImageurl(e.target.value)} className="form-control"></input>
                                        {imageUrl.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>&nbsp;&nbsp;
                                   
                                    <div className="col-lg-12"  style={{"textAlign":"center"}}>
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/cloths" className="btn btn-danger">Back</Link> 
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

export default Addcloths;