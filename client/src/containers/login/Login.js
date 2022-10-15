import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <i className="fa fa-light fa-arrow-left fa-2x"></i>
      </Link>
      <form className="form" method="post" action="">
        <h1>Login</h1>
        <div className="text-field">
          <input type="email" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="text-field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="forgot">Forgot password?</div>
        <input type="submit" value="Login" />
        <div className="register-link">
          Need an account? <Link to="/register"> Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
