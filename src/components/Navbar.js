import React, { useState } from "react";
import "../assets/css/data/Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="./assets/logo.png" alt="Logo" />
        <span>DALENA</span>
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        {["Home", "Transactions", "Users", "Profile"].map((item) => (
          <li key={item}>
            <a
              href={`${item.toLowerCase()}`}
              className={activeItem === item ? "active" : ""}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="auth-buttons">
        <a href="login">Log in</a>
        <a href="register">Register</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span>☰</span>
      </div>
    </div>
  );
};

export default Navbar;
