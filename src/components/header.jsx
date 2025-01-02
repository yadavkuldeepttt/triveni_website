import React, { useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-[#FACF2D] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/logo/logo3.jpg"
                alt="Company Logo"
                className="h-16 w-auto hover:opacity-90 transition-opacity"
              />
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                className="text-black focus:outline-none"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-5">
              <a href="/" className="nav-link">Home</a>
              <div className="relative group">
                <a href="/about" className="nav-link flex items-center">
                  About <ChevronDown className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="relative group">
                <a href="/services" className="nav-link flex items-center">
                  Services <ChevronDown className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="relative group">
                <a href="/destinations" className="nav-link flex items-center">
                  Destinations <ChevronDown className="w-4 h-4 ml-1" />
                </a>
              </div>
            </nav>

            {/* Phone Number & Login */}
            <div className="hidden md:flex gap-4 items-center">
              <div className="flex items-center border border-black rounded-md hover:border-gray-700 transition-colors">
                <div className="text-sm text-gray-600 flex items-center px-2">
                  <Phone className="h-4 w-4 text-gray-700 mr-2" />
                  <span className="text-gray-700 text-xs">24x7</span>
                </div>
                <div className="text-gray-700 text-xs font-medium bg-black text-white py-1.5 px-2 hover:bg-gray-800 transition-colors">
                  090 4545 0000
                </div>
              </div>
              <button className="bg-black text-white rounded-full px-3 py-2 text-xs tracking-[0.06rem] hover:bg-gray-800 hover:text-[#FACF2D] transition-all duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full shadow-md p-4 relative">
            <button
              className="text-black  focus:outline-none  absolute top-2 right-2"
              onClick={toggleMenu}
            >
              <X className="h-5 w-5" />
            </button>
            <nav className="flex mt-10 flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-yellow-600 font-semibold">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-yellow-600 font-semibold">
                About
              </a>
              <a href="/services" className="text-gray-700 hover:text-yellow-600 font-semibold">
                Services
              </a>
              <a href="/destinations" className="text-gray-700 hover:text-yellow-600 font-semibold">
                Destinations
              </a>
              <a href="/contact" className="text-gray-700 hover:text-yellow-600 font-semibold">
                Contact
              </a>
            </nav>
            <button className="bg-black mt-10 text-white rounded-full px-10 py-2 text-xs tracking-[0.06rem] hover:bg-gray-800 hover:text-[#FACF2D] transition-all duration-300">
                Login
              </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          font-weight: 600;
          color: #374151;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s;
        }
        .nav-link:hover {
          background-color: rgba(0, 0, 0, 0.05);
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Header;
