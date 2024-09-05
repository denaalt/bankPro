import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Login from "./components/Login";
import Register from "./components/Register";

import "./assets/css/data/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { getToken } from "./api/storage";
import UserContext from "./context/Usercontext";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Navbar />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
