import "../admin.css";
import React, { useEffect, useState } from 'react';


function Header2(){
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light mb-3 d-flex justify-content-end">
                {username && <h5 className="welcome-message text-primary me-3 mt-1 text-uppercase text-decoration-underline">{username}</h5>}
                <form method="post" action="http://localhost:3115/logout">
                    <button className="btn btn-outline-primary me-3" >Logout</button>
                </form>
            </nav>
        </>
    )
}
export default Header2;