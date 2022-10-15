import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <Link to="/">
        <i className="fa fa-light fa-arrow-left fa-2x"></i>
      </Link>
      <form className="form" method="post" action="">
        <h1>Register</h1>
        <div className="text-field">
          <input type="email" required />
          <span></span>
          <label>Name</label>
        </div>
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
        <div className="text-field">
          <input type="password" required />
          <span></span>
          <label>Confirm Password</label>
        </div>
        {/* <div className="forgot">Forgot password?</div> */}
        <input type="submit" value="Register" />
        <div className="login-link">
          Already signed up? <Link to="/login"> Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
