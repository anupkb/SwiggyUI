import React from "react";
import { Link } from "react-router-dom";
import { LOGO_IMG_URL } from "../../utils/constants";
import "./css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_IMG_URL} alt="Swiggy Logo" />
        </Link>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
