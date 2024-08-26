import React, { useState } from 'react';


const User = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
                  <form action="" method="">
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <label className="form-label" for="name"><b>Name :</b></label>
                        <input type="text" id="name" name="name" className="form-control col-lg-6"/>
                      </div>
                      <div className="form-group col-lg-6">
                        <label className="form-label" for="phone"><b>Phone  :</b></label>
                        <input type="text" id="phone" name="phone" className="form-control col-lg-6"/>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="form-group col-lg-6">
                        <label className="form-label" for="email"><b>Email :</b></label>
                        <input type="email" id="email" name="email" className="form-control col-lg-6"/>
                      </div>
                      <div className="form-group col-lg-6">
                        <label className="form-label" for="password"><b>Password  :</b></label>
                        <div className="password-container" style={{ position:'relative' }}>
                          <input type={passwordVisible ? 'text' : 'password'} className="form-control" id="password" name="password"required/>
                          <span id="togglePassword" className="eye-icon" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', }}>
                            {passwordVisible ? '🙈' : '👁️'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <button className="btn btn-warning col-lg-2 p-2" type='submit'><b>Submit</b></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
  
export default User;