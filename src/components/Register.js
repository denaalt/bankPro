import React, { useContext, useState } from "react";
import "../assets/css/data/App.css";
import { register } from "../api/auth";
import { checkToken } from "../api/storage";
import UserContext from "../context/Usercontext";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(checkToken());
    },
  });
  return (
    <div>
      <div className="wrapper register">
        <form action="">
          <div className="mybb">
            <h1></h1>
            <div className="input-box">
              <input
                onChange={handleChange}
                type="text"
                placeholder={"username"}
                name="username"
                required
              />
            </div>
            <div className="input-box">
              <input
                onChange={handleChange}
                type="password"
                placeholder="password"
                name="password"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-white text-sm font-medium mb-2"
              >
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault(); // dont refresh
                handleRegister(); //
              }}
              type="submit"
            >
              Register
            </button>

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
