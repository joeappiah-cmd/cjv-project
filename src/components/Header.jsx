import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
       
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-indigo-400">
            Streamify
          </Link>
        </div>

     {/* //desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg hover:text-indigo-400 transition-colors duration-300">Home</Link>
          <Link to="/movies" className="text-lg hover:text-indigo-400 transition-colors duration-300">Movies</Link>
          <Link to="/tvshows" className="text-lg hover:text-indigo-400 transition-colors duration-300">TvShows</Link>
        </nav>

     
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-lg hover:text-indigo-400 transition-colors duration-300">Login</Link>
          <Link to="/Register" className="text-lg px-4 py-2 bg-white rounded-md text-gray-800">Register</Link>
        </div>

        
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none" 
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 px-6 space-y-4">
          <Link to="/" className="block text-lg hover:text-indigo-400">Home</Link>
          <Link to="/movies" className="block text-lg hover:text-indigo-400">Movies</Link>
          <Link to="/tvshows" className="block text-lg hover:text-indigo-400">TvShows</Link>
          <Link to="/login" className="block text-lg hover:text-indigo-400">Login</Link>
          <Link to="/Register" className="block text-lg px-4 py-2 bg-white rounded-md text-gray-800">Register</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
