import React from "react";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <div>
      <header className="bg-[#FACF2D] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center">
              <img
                src="/images/logo/logo3.jpg"
                alt="Company Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Phone Number */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center  border border-black rounded-md">
                <div className="text-sm text-gray-600 flex items-center  px-2">
                  <Phone className="h-5 w-5 text-gray-700  mr-2" /> <span className="text-gray-700 text-sm">24x7</span>
                </div>
                <div className="text-gray-700 font-medium  bg-black text-white py-1.5 px-2">090 4545 0000</div>
              </div>
            </div>

            {/* Navigation and Actions */}
            <div className="flex items-center space-x-6">
              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-4">
                <a href="/blog" className="text-gray-700 font-[600] tracking-[0.05rem] hover:text-gray-900">
                  Blog
                </a>
                <a
                  href="/download"
                  className="text-sm tracking-[0.06rem] border border-black rounded-full px-3 py-1.5"
                >
                  Download App
                </a>
              </nav>

              {/* Login Button */}
              <button className="bg-black text-white rounded-full px-4 py-2 text-sm tracking-[0.06rem] rounded-md hover:text-yellow-400 transition">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
