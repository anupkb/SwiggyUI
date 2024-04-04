import React from "react";
import "./css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Logo.png"
          alt="Swiggy Logo"
        />
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="#home">Search</a>
          </li>
          <li>
            <a href="#about">Offers</a>
          </li>
          <li>
            <a href="#services">Help</a>
          </li>
          <li>
            <a href="#contact">Signin</a>
          </li>
          <li>
            <a href="#login">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
