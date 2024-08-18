import "../admin.css";
import React, { useEffect, useState } from 'react';
import Toast from '../login/Toast.jsx'; 

function Landing_page() {
    const [showToast, setShowToast] = useState(false);
    // const [username, setUsername] = useState('');

    useEffect(() => {
        // const storedUsername = sessionStorage.getItem('username');
        // if (storedUsername) {
        //     setUsername(storedUsername);
        // }
        setShowToast(true);
    }, []);

    return (
        <>
            <div className="title">Dashboard</div>
            {/* {username && <div className="welcome-message">Welcome, {username}!</div>} */}
            <Toast  onClose={() => setShowToast(false)} show={showToast} delay={4000} autohide style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '1000' }} message="You have successfully logged in!"  title="Success"/>
        </>
    );
}

export default Landing_page;
