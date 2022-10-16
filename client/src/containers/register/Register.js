import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { register } from "../../actions/userActions";
// components
import Message from "../../components/message/Message";
import Loader from "../../components/loader/Loader";

import "./Register.scss";

const Register = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegisterReducer);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMessage("Passwords dont match");
    } else {
      dispatch(register(name, email, password, password2));
      console.log("Successfully registered");
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <i className="fa fa-light fa-arrow-left fa-2x"></i>
      </Link>
      <form className="form" onSubmit={submitHandler}>
        <h1>Register</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <div className="text-field">
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <span></span>
          <label>Name</label>
        </div>
        <div className="text-field">
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="text-field">
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="text-field">
          <input
            type="password"
            value={password2}
            name="password2"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <span></span>
          <label>Confirm Password</label>
        </div>
        {/* <div className="forgot">Forgot password?</div> */}
        <input type="submit" value="Register" />
        <div className="login-link">
          Already signed up?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            {" "}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
