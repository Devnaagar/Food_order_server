import "../admin.css";
import React, { useEffect, useState } from 'react';

function Landing_page() {
    const token = sessionStorage.getItem('token');

    fetch('http://localhost:3115/dashboard', {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    });

    return (
        <> 
            <div className="title">Dashboard</div>
        </>
    );
}

export default Landing_page;
