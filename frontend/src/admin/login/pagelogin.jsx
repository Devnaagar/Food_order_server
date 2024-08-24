import "../admin.css";
import React, { useState } from 'react';
import ToastComponent from './Toast.jsx';
import Header from "../defaults/header.jsx";
import { Lines } from 'react-preloaders';
import Footer from "../defaults/footer.jsx";

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const response = await fetch('http://localhost:3115/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setLoading(true);
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('admin_id', data.admin_id);
                sessionStorage.setItem('token', data.token);
                setTimeout(() => {
                    window.location.href = data.redirectUrl;
                }, 3000);
            } else {
                setToastMessage(data.message || 'Login failed');
                setToastVisible(true);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setToastMessage('An error occurred. Please try again.');
            setToastVisible(true);
        }
    };

    return (
        <>
            <Header />
            <div className="content d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text-center">Admin Login</h2><br />
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group my-1">
                                            <label htmlFor="email"><h5>Email</h5></label>
                                            <input type="email" className="form-control" id="email" name="email" required/>
                                        </div>
                                        <div className="form-group my-1">
                                            <label htmlFor="password"><h5>Password</h5></label>
                                            <div className="password-container" style={{ position:'relative' }}>
                                                <input type={passwordVisible ? 'text' : 'password'} className="form-control" id="password" name="password"required/>
                                                <span id="togglePassword" className="eye-icon" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', }}>
                                                    {passwordVisible ? '🙈' : '👁️'}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mt-3">
                                            <button type="submit" className="btn btn-primary col-lg-3">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <ToastComponent show={toastVisible} message={toastMessage} onClose={() => setToastVisible(false)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {loading ? <Lines customLoading={loading} time={2000} /> : ""}
        </>
    );
}

export default Login;
