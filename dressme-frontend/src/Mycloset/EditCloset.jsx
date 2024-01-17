import React from 'react';
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const EditCloset = () => {
    const [name, setName] = useState("");
    const { c_id } = useParams();
    const [id, setId] = useState("");
    const [validation, valchange] = useState(false);
    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    const [color, setColor] = useState("");
    const [weatherTag, setWeathertag] = useState("");
    const [gender, setGender] = useState("");
    const [closetLocation, setClosetLocation] = useState("");
    const [cloths, setCloths] = useState([]);
    const [fav, setFav] = useState(true);
    const [clothTitle, setClothTitle] = useState("");
    const [username, setUsername] = useState("priyabalan");

    const handlesubmit = (e) => {
        e.preventDefault();
        //alert(clothCategory);
        const data = { name, username, color, gender, weatherTag, closetLocation, fav };
        //const data={name,imageUrl,gender,weatherTag};
        console.log(data);
        fetch("http://localhost:8080/mycloset/" + c_id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            //alert('Saved successfully.');
            Swal.fire({
                icon: "success",
                title: "Saved successfully."
            });
            navigate('/ListCloset');
        }).catch((err) => {
            console.log(err.message)
        })
        const newContact = {
            name: data.name,
            username: data.username,
            closetLocation: data.closetLocation,
            color: data.color,
            isFav: data.isFav,
            gender: data.gender,
            weatherTag: data.weatherTag
        }
        const newContacts = [...records, newContact];
        //console.log(newContacts);
        //alert(newContacts);
        setRecords(newContacts);

    }

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

        let response = await fetch('http://localhost:8080/cloths', { method: 'GET' });
        let category = await response.json();
        // do stuff with data
        console.log(category);
        if (category) {
            setCloths(category);
            // setName(category[0].name)
            console.log("@@@@@@" + cloths);
        }
        // setWeathertag("SUMMER");
        // setGender("MEN");
    }
    //fetchProductData();

    useEffect(() => {
        fetchProductData();
        fetch("http://localhost:8080/mycloset/" + c_id).then((res) => {
            return res.json();
        }).then((resp) => {

            setId(resp.id);
            setName(resp.name);
            console.log(resp);

            // setCategory(resp.category);
            setWeathertag(resp.weatherTag);

            setGender(resp.gender);
            setUsername(resp.username);
            setColor(resp.color);
            setClosetLocation(resp.closetLocation);
            setFav((resp.fav) ? "true" : "false");
            //setName(resp.name);
            //alert(resp["clothCategory"].name);
            //setClothCategory({id:resp["clothCategory"].id,name:resp["clothCategory"].name});


        }).catch((err) => {
            console.log(err.message);
        })
    }, []);


    const handleChange = (e) => {

        var evt = document.getElementById("Closetname");
        const ctext = evt.options[evt.selectedIndex].text;
       
        const selectedValue = e.target.value;
         

    };

    const handleisFavChange = (e) => {

        var evt = document.getElementById("fav");
        const ctext = evt.options[evt.selectedIndex].value;
    
        setFav(ctext);
         

    };


    const handletitleChange = (e) => {

        var evt = document.getElementById("cloths");
        const ctext = evt.options[evt.selectedIndex].text;
       //alert(evt.options[evt.selectedIndex].text);
        setClothTitle(evt.options[evt.selectedIndex].text);
        setName(evt.options[evt.selectedIndex].text);


        const selectedValue = e.target.value;
         

    };

    return (
        <div><NavBar />
            <div className="row">
                <div className="d-flex w-100 vh-50 justify-content-center aligns-item-center">
                    <div className='w-50 border text-white p-5'>
                        <form className="container" onSubmit={handlesubmit}>

                            <div className="card" style={{ "textAlign": "left" }}>
                                <div className="card-title">
                                    <h2> Edit MyCloset</h2>
                                </div>
                                <div className="card-body">

                                    <div className="row">

                                        {/* <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Cloth Title</label>
                                                <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                            {name.length===0 && validation && <span className="text-danger">Enter the title</span>}
                                            </div>
                                        </div> */}

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <div className="col-lg-12">

                                                    <select className="custom-select" value={name} id="cloths" onChange={handletitleChange}>
                                                        {cloths && cloths.map(item => (
                                                            <option value={item.name} text={item.name}>{item.name}</option>
                                                        ))}
                                                    </select>&nbsp;
                                                </div>
                                            </div>&nbsp;&nbsp;
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <select className="custom-select" id="gendername" value={gender} onChange={handleGenderChange} >

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
                                                <option key="WINTER" value="WINTER">Winter</option>

                                            </select>
                                        </div>
                                    </div>&nbsp;&nbsp;

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Color</label>
                                            <input required value={color} onMouseDown={e => valchange(true)} onChange={e => setColor(e.target.value)} className="form-control"></input>
                                            {color.length === 0 && validation && <span className="text-danger">Enter the color</span>}
                                        </div>
                                    </div>&nbsp;&nbsp;

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Closet Location</label>
                                            <input required value={closetLocation} onMouseDown={e => valchange(true)} onChange={e => setClosetLocation(e.target.value)} className="form-control"></input>
                                            {closetLocation.length === 0 && validation && <span className="text-danger">Enter the color</span>}
                                        </div>
                                    </div>&nbsp;&nbsp;

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Is Favorite</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <select className="custom-select" value={fav} id="fav" onChange={handleisFavChange} >

                                                <option key="YES" value="true">Yes</option>
                                                <option key="NO" value="false">No</option>

                                            </select>

                                        </div>
                                    </div>&nbsp;&nbsp;

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/ListCloset" className="btn btn-danger">Back</Link>
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

export default EditCloset;