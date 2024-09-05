import React from "react";
import "../assets/css/data/App.css";

const Register = () => {
  return (
    <div>
      <div className="wrapper register">
        <form action="">
          <div className="mybb">
            <h1></h1>
            <div className="input-box">
<<<<<<< HEAD
              <input type="text" placeholder={"  Username"} required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="  password" required />
=======
              <input type="text" placeholder={"  Username "} required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="   password" required />
>>>>>>> 271c1d97ba8ff9c2570346b32c0f93d0884b9852
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
                Don't have an account?<a href="#">Register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
      <h></h>
      <button></button>
    </div>
  );
};

export default Register;
