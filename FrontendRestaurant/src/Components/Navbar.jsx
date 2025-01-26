import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Veganimg from "../../public/logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation and close the menu
  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Close the menu
    navigate(path); // Navigate to the specified path
  };

  return (
    <header className="bg-white paddingNavbar lg:pt-8 lg:px-32 sm:p-12 md:py-8 md:px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <h1 className="text-black font-bold flex lg:text-4xl text-xl md:text-4xl tracking-widest items-center">
          Flavor Fusion
          <img className="w-16 h-16" src={Veganimg} alt="veganimg" />
        </h1>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-lg items-center">
          <li
            className="text-[#58b749] font-bold transition-transform transform hover:translate-y-1 duration-300 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li className="hover:text-black font-bold transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
            About
          </li>
          <li onClick={()=> navigate("/services")} className="hover:text-black font-bold transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
            Services
          </li>
          <li className="hover:text-black font-bold transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
            Menu
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden flex items-center space-x-6">
        <div className="relative mr-4"></div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-gray-500 focus:outline-none"
        >
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white p-8 top-24 flex flex-col items-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
        style={{ zIndex: 1000 }}
      >
        <ul className="space-y-6 text-lg text-center">
          <li
            className="hover:text-green font-bold transition-transform transform hover:translate-y-1 duration-300 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            Home
          </li>
          <li
            className="hover:text-black font-bold transition-transform transform hover:translate-y-1 duration-300 cursor-pointer"
            onClick={() => handleNavigation("/about")}
          >
            About
          </li>
          <li
            className="hover:text-black font-bold transition-transform transform hover:translate-y-1 duration-300 cursor-pointer"
            onClick={() => handleNavigation("/services")}
          >
            Services
          </li>
          <li
            className="hover:text-black font-bold transition-transform transform hover:translate-y-1 duration-300 cursor-pointer"
            onClick={() => handleNavigation("/browsemenu")}
          >
            Menu
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
