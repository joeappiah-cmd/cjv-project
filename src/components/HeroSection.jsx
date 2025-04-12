import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://assignment-2-kroa.onrender.com/api/movies/all');
        const data = await response.json();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p className="text-center text-gray-700 dark:text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="feature-section py-6 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-indigo-400 uppercase">CINEMA STREAMING</h2>
      </div>

      <Slider {...settings} className="movie-carousel">
        {movies.map((movie) => (
          <div key={movie.id} className="px-2">
            <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
              <img
                src={movie.largePoster || "https://via.placeholder.com/300x450"}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-center text-lg font-semibold sm:text-base md:text-lg">{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
