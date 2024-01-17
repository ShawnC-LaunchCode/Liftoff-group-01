import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Editcloths() {

    const { c_id } = useParams();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [validation, valchange] = useState(false);
    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    const [category, setCategory] = useState("");
    const [clothCategory, setClothCategory] = useState({ id: "", name: "" });
    const [imageUrl, setImageurl] = useState("");
    const [weatherTag, setWeathertag] = useState("");
    const [gender, setGender] = useState("");
    const [state, setState] = useState();
    const [cid, setCid] = useState();
    const [ccategory, setCcategory] = useState();

    const handlesubmit = (e) => {
        e.preventDefault();
        //alert(clothCategory);
        const data = { name, clothCategory, imageUrl, gender, weatherTag };
        //const data={name,imageUrl,gender,weatherTag};
        console.log(data);
        //alert(c_id);
        fetch("http://localhost:8080/cloths/" + c_id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            //alert('Saved successfully.');
            Swal.fire({
                icon: "success",
                title: "Updated successfully."
            });
            navigate('/cloths');
        }).catch((err) => {
            console.log(err.message)
        })
        const newContact = {
            name: data.name,
            clothCategory: { id: data.clothCategory.id, name: data.clothCategory.name },
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
        const ctext = evt.options[evt.selectedIndex].text;
        // alert(ctext);
        setCcategory(evt.options[evt.selectedIndex].text);


        const selectedValue = e.target.value;
        // alert(selectedValue);
        setCid(selectedValue);
        setClothCategory({ id: selectedValue, name: ctext });

        console.log(clothCategory);

    };
    const handleWeatherChange = (e) => {
        const selectedValue = e.target.value;
        // alert(selectedValue); 
        setWeathertag(selectedValue);
    };

    const handleGenderChange = (e) => {
        const selectedValue = e.target.value;
        // alert(selectedValue); 
        setGender(selectedValue);
    };
    async function fetchProductData() {

        let response = await fetch('http://localhost:8080/clothCategories', { method: 'GET' });
        let category = await response.json();
        // do stuff with data
        console.log(category);
        if (category) {
            setCategory(category);
            //setClothCategory({id:category[0].id,name:category[0].name})
        }
        //setWeathertag("SUMMER");
        //setGender("MEN");
    }
    //fetchProductData();

    useEffect(() => {

        fetchProductData();

        fetch("http://localhost:8080/cloths/" + c_id).then((res) => {
            return res.json();
        }).then((resp) => {

            setId(resp.id);
            setName(resp.name);


            // setCategory(resp.category);
            setWeathertag(resp.weatherTag);

            setGender(resp.gender);
            setImageurl(resp.imageUrl);
            setCid(resp["clothCategory"].id);
            setCcategory(resp["clothCategory"].name);
            //alert(resp["clothCategory"].name);
            setClothCategory({ id: resp["clothCategory"].id, name: resp["clothCategory"].name });


        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div><NavBar></NavBar>
            <div className="row">
                <div className="d-flex w-100 vh-50 justify-content-center aligns-item-center">
                    <div className='w-50 border text-white p-5'>
                        <form className="container" onSubmit={handlesubmit}>

                            <div className="card" style={{ "textAlign": "left" }}>
                                <div className="card-title">
                                    <h2> Edit Clothes Deatils</h2>
                                </div>
                                <div className="card-body">

                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>ID</label>
                                                <input value={id} disabled="disabled" className="form-control"></input>
                                            </div>
                                        </div>


                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input required value={name} onMouseDown={e => valchange(true)} onChange={e => setName(e.target.value)} className="form-control"></input>
                                                {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                                            </div>
                                        </div>&nbsp;&nbsp;


                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <select className="custom-select" value={gender} id="gendername" onChange={handleGenderChange} >

                                                    <option key="MEN" value="MEN">Men</option>
                                                    <option key="WOMEN" value="WOMEN">Women</option>

                                                </select>

                                            </div>
                                        </div>&nbsp;&nbsp;
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Weather Tag</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <select className="custom-select" value={weatherTag} onChange={handleWeatherChange} >

                                                    <option key="SUMMER" value="SUMMER">Summer</option>
                                                    <option key="SPRING" value="SPRING">Spring</option>
                                                    <option key="AUTUMN" value="AUTUMN">Autumn</option>
                                                    <option key="SNOW" value="SNOW">Snow</option>
                                                    <option key="RAIN" value="RAIN">Rain</option>
                                                    <option key="WINTER" value="WINTER">Winter</option>

                                                </select>
                                            </div>
                                        </div>&nbsp;&nbsp;
                                        <div className="col-lg-12">
                                            <div className="form-group" >
                                                <label>Clothes Category</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <select className="custom-select" value={cid} id="Categoryname" onChange={handleChange}>
                                                    {category && category.map(item => (
                                                        <option value={item.id} text={item.name}>{item.name}</option>
                                                    ))}
                                                </select><input type="hidden" value={cid} ></input><input type="hidden" value={ccategory} ></input>
                                            </div>
                                        </div>&nbsp;&nbsp;

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Image URL</label>
                                                <input required value={imageUrl} onMouseDown={e => valchange(true)} onChange={e => setImageurl(e.target.value)} className="form-control"></input>
                                                {imageUrl.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                                            </div>
                                        </div>&nbsp;&nbsp;

                                        <div className="col-lg-12" style={{ "textAlign": "center" }}>
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

            <Footer />
        </div>
    )
}

export default Editcloths;