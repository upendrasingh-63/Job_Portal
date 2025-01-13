import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">JobMatch</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/jobs" className="hover:text-gray-400">Jobs</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/signup" className="hover:text-gray-400">Signup</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <span className="text-xl">✖</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-600">Home</Link>
          <Link to="/jobs" className="block px-4 py-2 hover:bg-gray-600">Jobs</Link>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-600">Login</Link>
          <Link to="/signup" className="block px-4 py-2 hover:bg-gray-600">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


//--------------------------------------------------------------------------------------------------------------------------------
// import React from "react";

// function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//         <h1 className="text-2xl">Navbar Component</h1>
//     </nav>
//   );
// }

// export default Navbar;
