import React from "react";
import "../assets/css/data/App.css";

const Login = () => {
  return (
    <div>
      <div className="wrapper2 login">
        <form action="">
          <div className="mybb2 ">
            <h1>Login</h1>
            <div className="input-box2">
              <input type="text" placeholder={"email"} required />
            </div>
            <div className="input-box2">
              <input type="password" placeholder="password" required />
            </div>

            <div className="remember-forgot2">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#"> Forgot password? </a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link2">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
      Login
    </div>
  );
};

export default Login;
