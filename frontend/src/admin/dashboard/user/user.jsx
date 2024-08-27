import React, { useState } from 'react';
import ToastComponent from '../../login/Toast.jsx';

const User = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({name: '',phone: '',email: '',password: ''});
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
      const response = await fetch('http://localhost:3115/addusers', {
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
        setFormData({ name: '', phone: '', email: '', password: '' });
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
                <h2>Add Users</h2>
              </div>
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <label className="form-label" htmlFor="name"><b>Name :</b></label>
                        <input type="text" id="name" name="name" className="form-control col-lg-6" value={formData.name} onChange={handleChange} required/>
                      </div>
                      <div className="form-group col-lg-6">
                        <label className="form-label" htmlFor="phone"><b>Phone  :</b></label>
                        <input type="text" id="phone" name="phone" className="form-control col-lg-6" value={formData.phone} onChange={handleChange} required/>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="form-group col-lg-6">
                        <label className="form-label" htmlFor="email"><b>Email :</b></label>
                        <input type="email" id="email" name="email" className="form-control col-lg-6" value={formData.email} onChange={handleChange} required/>
                      </div>
                      <div className="form-group col-lg-6">
                        <label className="form-label" htmlFor="password"><b>Password  :</b></label>
                        <div className="password-container" style={{ position:'relative' }}>
                          <input type={passwordVisible ? 'text' : 'password'} className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                          <span id="togglePassword" className="eye-icon" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                            {passwordVisible ? '🙈' : '👁️'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <button className="btn btn-warning col-lg-2 p-2" type='submit'><b>Submit</b></button>
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

export default User;
