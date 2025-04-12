import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

 
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-indigo-400">
          Streamify
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center bg-gray-700 rounded-md px-3 py-2">
          <input
            type="text"
            className="bg-transparent border-none outline-none text-white placeholder-gray-400"
            placeholder="Search movies or TV shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-indigo-400 hover:text-indigo-300 ml-2">
            🔍
          </button>
        </form>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg hover:text-indigo-400 transition-colors duration-300">Home</Link>
          <Link to="/movies" className="text-lg hover:text-indigo-400 transition-colors duration-300">Movies</Link>
          <Link to="/tvshows" className="text-lg hover:text-indigo-400 transition-colors duration-300">TV Shows</Link>
        </nav>

        {/* Authentication Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-lg hover:text-indigo-400 transition-colors duration-300">Login</Link>
          <Link to="/register" className="text-lg px-4 py-2 bg-white rounded-md text-gray-800 hover:bg-gray-200 transition">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
