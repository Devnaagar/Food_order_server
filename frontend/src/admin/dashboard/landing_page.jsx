import "../admin.css";
import React, { useEffect, useState } from 'react';
import Header2 from "../defaults/nav.jsx";

function Landing_page(){
    // useEffect(() => {
    //     axios.post('http://localhost:3115/admin')
    //         .then(response => {
    //             setStores(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching store data:', error);
    //         });
    // }, []);
    return (
        <>
            <div className="title"> Dashboard</div>
        </>
    ) 
}

export default Landing_page;