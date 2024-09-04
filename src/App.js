import React from "react";
import logo from "./logo.svg";
import Login from "./components/Login";
import Register from "./components/Register";

import "./assets/css/data/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Outlet />
    </div>
  );
}

export default App;
