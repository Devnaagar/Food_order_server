import "../admin.css";
import Header from "../defaults/header.jsx";
import Footer from "../defaults/footer.jsx";

function Login(){
    
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
                                    <form action="<?php echo site_url('admin/admin_login/do_login'); ?>" method="post">
                                        <div class="form-group my-1">
                                            <label for="email"><h5>Email</h5></label>
                                            <input type="email" class="form-control" id="email" name="email" required />
                                        </div>
                                        <div class="form-group my-1">
                                            <label for="password"><h5>Password</h5></label>
                                            <div class="password-container">
                                                <input type="password" class="form-control" id="password" name="password"required/>
                                                <span id="togglePassword" class="eye-icon">
                                                    <span class="eye">👁️</span>
                                                    <span class="slash"></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group form-check my-3">
                                            <input type="checkbox" class="form-check-input" id="remember_me" name="remember_me" />
                                            <label class="form-check-label" for="remember_me">Remember Me</label>
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