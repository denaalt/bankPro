import React, { useContext, useState } from "react";
import "../assets/css/data/App.css";
import { setToken } from "../api/storage";
import UserContext from "../context/Usercontext";
import {
  QueryClientProvider,
  QueryClient,
  useMutation,
} from "@tanstack/react-query";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/home");
    },
    onError: (e) => {
      console.log(e);
    },
  });

  return (
    <div>
      <div className="wrapper2 login">
        <form action="">
          <div className="mybb2 " style={{ marginRight: 220 }}>
            <h1></h1>
            <div className="input-box2">
              <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder={"  Username"}
                required
              />
            </div>
            <div className="input-box2">
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="  password"
                required
              />
            </div>

            <div className="remember-forgot2">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#"> Forgot password? </a>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              type="submit"
            >
              Login
            </button>

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
