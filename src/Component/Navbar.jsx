import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../Assets/habot-logo.png';
import { FaTimes } from 'react-icons/fa';
import './Navbar.css'
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="text-black text-xl font-bold">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-black">Find Supplier</button>
          <div className="relative">
            <button className="text-black" onClick={toggleDropdown}>
              Find Suppliers
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</a>
              </div>
            )}
          </div>
          <button className="text-black bg-white px-4 py-3 rounded border-2 border-green-500">
            Login / Signup
          </button>
        </div>
        <div className="md:hidden">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30"
          >
            <div className="flex flex-col items-start p-4 space-y-4 h-full">
              <button className="self-end text-black" onClick={toggleMenu}>
                <FaTimes />
              </button>
              <button className="text-black">Find Supplier</button>
              <button className="text-black" onClick={toggleDropdown}>
                Find Suppliers
              </button>
              {dropdownOpen && (
                <div className="w-full bg-white rounded-md shadow-lg z-20">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</a>
                </div>
              )}
              <button className="text-black bg-white px-4 py-3 rounded border-2 border-green-500">
                Login / Signup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
