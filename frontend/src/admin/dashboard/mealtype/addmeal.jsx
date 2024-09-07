import React, { useState } from 'react';
import ToastComponent from '../../login/Toast.jsx';

const Meal = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({name: ''});
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:3115/add_meals', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (response.ok) {
            setToastMessage('User added successfully!');
            setToastVisible(true);
            setFormData({ name: ''});
        } else {
            setToastMessage(data.message || 'Failed to add user');
            setToastVisible(true);
        }
        } catch (error) {
        console.error('Error adding user:', error);
        setToastMessage('An error occurred. Please try again.');
        setToastVisible(true);
        }
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row my-4">
                                <h2>Add Meal</h2>
                            </div>
                            <div className="card">
                                <div className="card-body p-2">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row d-flex justify-content-between">
                                            <div className="form-group col-lg-9 d-flex">
                                                <label className="form-label col-lg-2" htmlFor="name"><b>Meal Name :</b></label>
                                                <input type="text" id="name" name="name" className="form-control col-lg-8" value={formData.name} onChange={handleChange} required/>
                                            </div>
                                            <div className="form-group col-lg-2 d-flex justify-content-center">
                                                <button className="btn btn-warning col-lg-7 p-2" type='submit'><b>Add</b></button>
                                            </div>
                                        </div>
                                    </form>
                                    <ToastComponent show={toastVisible} message={toastMessage} onClose={() => setToastVisible(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Meal;
