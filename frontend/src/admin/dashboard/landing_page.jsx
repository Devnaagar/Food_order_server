import "../admin.css";
import React, { useEffect, useState } from 'react';
import Toast from '../login/Toast.jsx'; 
import MyLoader from 'react-fullpage-custom-loader';

function Landing_page() {
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
        setShowToast(true);
    }, []);
    const fadeAndCloseLoader = () => {
        this.setState({startFadeOut: true});
        setTimeout(() => {
          this.setState({showLoader: false, startFadeOut: false})
        }, 2000);
    }

    return (
        <> 
            <MyLoader loadType={"timer"} counterDelay={300} countMax={5} sentences={["Admin dashboard"]}/>
            <div className="title">Dashboard</div>
            {/* {username && <div className="welcome-message">Welcome, {username}!</div>} */}
            <Toast  onClose={() => setShowToast(false)} show={showToast} delay={4000} autohide style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '1000' }} message="You have successfully logged in!"  title="Success"/>
        </>
    );
}

export default Landing_page;
