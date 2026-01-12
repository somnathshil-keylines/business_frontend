import React, { useState } from "react";
import api from "../api/axios.js";
import { Link } from "react-router-dom";
import UserSidebar from "./UserSidebar.jsx";

function Navbar() {
  const token = localStorage.getItem("token");
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <>
      <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">MyApp</div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-blue-400 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-400 cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <Link
                to="/contact"
                className="hover:text-blue-400 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Button */}
          {!token && (
            <div class="w-50 flex items-center justify-between">
              <Link to="/login">
                <button className=" md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className=" md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition">
                  Signup
                </button>
              </Link>
            </div>
          )}
          {/* Mobile Menu Icon */}
          {token && (
            <button
              onClick={() => setIsOpenSidebar(true)}
              className="text-2xl ml-4"
            >
              ☰
            </button>
          )}
        </div>
      </nav>
      {/* Sidebar */}
      <UserSidebar
        isOpen={isOpenSidebar}
        onClose={() => setIsOpenSidebar(false)}
      />
    </>
  );
}

export default Navbar;
