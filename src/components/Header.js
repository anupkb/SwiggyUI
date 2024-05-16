import React from "react";
import { Link } from "react-router-dom";
import { LOGO_IMG_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="font-semibold py-2 px-4 flex justify-between items-center border-b border-gray-200 shadow-md">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_IMG_URL} alt="Swiggy Logo" className="w-24 h-auto" />
        </Link>
      </div>
      <nav className="nav-items">
        <ul className="flex">
          <li className="mr-8">
            <Link to="/search" className="text-gray-700 hover:underline">
              Search
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/offers" className="text-gray-700 hover:underline">
              Offers
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/services" className="text-gray-700 hover:underline">
              Services
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/cart" className="text-gray-700 hover:underline">
              Cart - {cartItems.length}
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/signin" className="text-gray-700 hover:underline">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
