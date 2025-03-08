import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);     //state variable
  const [loading, setLoading] = useState(true); //starts at true and changes to false when movies loads
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://streamify-api-49k2.onrender.com/movies');
        const data = await response.json();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchMovies(); // this is enabled by the useEffect hook
  }, []);

  if (loading) return <p className="text-center text-gray-700 dark:text-white">Loading...</p>;  //conditional rendering
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
    <section className="feature-section py-6 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-indigo-400 uppercase">CINEMA STREAMING</h2>
        <Link to="/movies" className="px-4 py-2 border-indigo-400 text-indigo-400 uppercase-indigo-400"></Link>
      </div>

      
      <Slider {...settings} className="movie-carousel">
        {movies.map((movie) => (
          <div key={movie.id} className="px-2">
            <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
              <img
                src={movie.poster || "https://via.placeholder.com/300x450"}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-center text-lg font-semibold">{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
