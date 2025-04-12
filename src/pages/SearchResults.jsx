import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";

  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const movieRes = await fetch(`https://assignment-2-kroa.onrender.com/api/movies/search?title=${encodeURIComponent(searchQuery)}`);
        const tvShowRes = await fetch(`https://assignment-2-kroa.onrender.com/api/tvshows/search?title=${encodeURIComponent(searchQuery)}`);

        if (!movieRes.ok || !tvShowRes.ok) throw new Error("Error fetching search results");

        const moviesData = await movieRes.json();
        const tvShowsData = await tvShowRes.json();

        setMovies(moviesData);
        setTvShows(tvShowsData);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchResults();
  }, [searchQuery]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-white mb-6">
        Search Results for "{searchQuery}"
      </h2>

      {movies.length === 0 && tvShows.length === 0 ? (
        <p className="text-white">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/movies/${movie.id}`)} // Navigate to MovieDetails page
            >
              <img src={movie.largePoster} alt={movie.title} className="w-full h-80 object-cover rounded-lg" />
              <h3 className="text-xl font-bold text-white mt-4">{movie.title}</h3>
              <p className="text-gray-400">{movie.year} | {movie.genre}</p>
              <p className="text-gray-300 mt-2">{movie.synopsis.substring(0, 100)}...</p>
              <p className="text-indigo-400 mt-2">
                Rent: ${movie.rentPrice} | Buy: ${movie.buyPrice}
              </p>
            </div>
          ))}

          {tvShows.map((show) => (
            <div
              key={show.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/tvshows/${show.id}`)} // Navigate to TvShowDetails page
            >
              <img src={show.largePoster} alt={show.title} className="w-full h-80 object-cover rounded-lg" />
              <h3 className="text-xl font-bold text-white mt-4">{show.title}</h3>
              <p className="text-gray-400">{show.year} | {show.genre}</p>
              <p className="text-gray-300 mt-2">{show.synopsis.substring(0, 100)}...</p>
              <p className="text-indigo-400 mt-2">
                Rent: ${show.rentPrice} | Buy: ${show.buyPrice}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
