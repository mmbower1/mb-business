import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Login.scss";
// actions
import { login } from "../../actions/userActions";
// components
import Message from "../../components/message/Message";
import Loader from "../../components/loader/Loader";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    console.log("login success");
  };

  return (
    <div className="login">
      <Link to="/">
        <i className="fa fa-light fa-arrow-left fa-2x"></i>
      </Link>
      <form className="form" method="post" action="" onSubmit={submitHandler}>
        <h1>Login</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <div className="text-field">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="text-field">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="forgot">Forgot password?</div>
        <input type="submit" value="Login" />
        <div className="register-link">
          Need an account?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            {" "}
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
