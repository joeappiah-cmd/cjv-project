import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate =useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/movies/all")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <section className="min-h-screen">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">MOVIES</h1>
          <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300"
      >
        ⬅ Back
      </button>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-[2/3]">
                  <img
                    src={movie.largePoster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h4 className="text-lg font-bold text-white">{movie.title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
