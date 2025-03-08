import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch("https://streamify-api-49k2.onrender.com/TvShows")
      .then((response) => response.json())
      .then((data) => setTvShows(data))
      .catch((error) => console.error("Error fetching TV shows:", error));
  }, []);

  return (
    <section className="min-h-screen">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">TV SHOWS</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tvShows.map((show) => (
              <Link to={`/tvshows/${show.id}`} key={show.id}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-[2/3]">
                  <img
                    src={show.poster}
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h4 className="text-lg font-bold text-white">{show.title}</h4>
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

export default TvShows;
