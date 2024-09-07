import React, { useContext, useState } from "react";
import "../assets/css/data/App.css";
import { setToken } from "../api/storage";
import UserContext from "../context/Usercontext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const { mutate: handleLogin } = useMutation({
  //   mutationKey: ["login"],
  //   mutationFn: () => Login(userInfo),
  //   onSuccess: () => {
  //     setUser(true);
  //   },
  // });

  return (
    <div>
      <div className="wrapper2 login">
        <form action="">
          <div className="mybb2 ">
            <h1></h1>
            <div className="input-box2">
              <input type="text" placeholder={"  Username"} required />
            </div>
            <div className="input-box2">
              <input type="password" placeholder="  password" required />
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
