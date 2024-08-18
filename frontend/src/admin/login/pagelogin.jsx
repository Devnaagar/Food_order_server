import "../admin.css";
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Header from "../defaults/header.jsx";
import Footer from "../defaults/footer.jsx";

function Login(){
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setRememberMe(isChecked);

        if (isChecked) {
        Cookies.set('rememberMe', 'true', { expires: 30 });
        } else {
        Cookies.remove('rememberMe');
        }
    }
    return(
        <>
            <Header/>
            <div class="content d-flex justify-content-center align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="card">
                                <div class="card-body ">
                                    <h2 class="text-center">Admin Login</h2><br/>
                                    <form action="http://localhost:3115/admin" method="post">
                                        <div class="form-group my-1">
                                            <label for="email"><h5>Email</h5></label>
                                            <input type="email" class="form-control" id="email" name="email" required />
                                        </div>
                                        <div class="form-group my-1">
                                            <label for="password"><h5>Password</h5></label>
                                            <div className="password-container" style={{ position:'relative' }}>
                                                <input type={passwordVisible ?'text':'password'} className="form-control" id="password" name="password"required/>
                                                <span id="togglePassword" className="eye-icon" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer',}}> 
                                                    {passwordVisible ? '🙈' : '👁️'}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group form-check my-3">
                                            <input type="checkbox" className="form-check-input" id="remember_me" name="remember_me" checked={rememberMe} onChange={handleCheckboxChange}/>
                                            <label className="form-check-label" htmlFor="remember_me">
                                                Remember Me
                                            </label>
                                        </div>
                                        <div className="row justify-content-center">
                                            <button type="submit" class="btn btn-primary col-lg-3">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login;