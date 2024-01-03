import React, { useEffect, useState } from "react";


const Listcloth = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        let headers=new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        fetch('http://localhost:8080/clothCategories',{
            mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: headers
        })
        .then(res=>{ 
            console.log(res.json());
        })
        // const url = "http://localhost:8080/clothCategories";

        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(url);
        //         const json = await response.json();
        //         console.log(json.slip.advice);
        //         setAdvice(json.slip.advice);
        //     } catch (error) {
        //         console.log("error", error);
        //     }
        // };

        // fetchData();
    }, []);

    return (
        <div>{advice}</div>
    );
};

export default Listcloth;

