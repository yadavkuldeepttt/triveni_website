import React from "react";
import { Phone, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div>
      <header className="bg-[#FACF2D] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/logo/logo3.jpg"
                alt="Company Logo"
                className="h-16 w-auto hover:opacity-90 transition-opacity"
              />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-5 ps-4">
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

            {/* Phone Number */}
            <div className="flex gap-4 items-center">

            <div className="hidden md:flex items-center">
              <div className="flex items-center border border-black rounded-md hover:border-gray-700 transition-colors">
                <div className="text-sm text-gray-600 flex items-center px-2">
                  <Phone className="h-4 w-4 text-gray-700 mr-2" />
                  <span className="text-gray-700 text-xs">24x7</span>
                </div>
                <div className="text-gray-700 text-xs font-medium bg-black text-white py-1.5 px-2 hover:bg-gray-800 transition-colors">
                  090 4545 0000
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button className="bg-black text-white rounded-full px-3 py-2 text-xs tracking-[0.06rem] hover:bg-gray-800 hover:text-[#FACF2D] transition-all duration-300">
              Login
            </button>
            </div>

          </div>
        </div>
      </header>

      <style jsx>{`
        .nav-link {
          font-weight: 600;
          color: #374151;
          tracking: 0.05rem;
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