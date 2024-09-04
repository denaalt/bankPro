import React from "react";
import "../App.css";

const Register = () => {
  return (
    <div>
      <div className="wrapper register">
        {/* <img src = {require('../assets/css/data/register.png')} alt="registerpc" className="registerp"></img> */}
        <form action="">
          <div className="mybb">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder={"email"} required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="password" required />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <button type="submit">Register</button>

            <div className="register-link">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
      <h>hi</h>
      <button>username</button>
    </div>
  );
};

export default Register;
