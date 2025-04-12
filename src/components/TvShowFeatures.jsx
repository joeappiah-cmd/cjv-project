import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TvShowsFeatures = () => {
  const [tvShows, settvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchtvShows = async () => {
      try {
        const response = await fetch('https://assignment-2-kroa.onrender.com/api/tvshows/all');
        const data = await response.json();
        settvShows(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tvShows');
        setLoading(false);
      }
    };

    fetchtvShows();
  }, []);

  const featuredtvShows = tvShows.slice(0, 6);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="feature-section py-6 px-4">
        <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-indigo-400 uppercase">Featured tvShows</h2>
        <Link to="/tvShows" className="px-4 py-2 border-indigo-400 text-indigo-400 uppercase border border-indigo-400">View All</Link>
        </div>

      <div className="movie-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {featuredtvShows.map((tvShows) => (
          <div
            key={tvShows.id}
            className="movie-card rounded-lg"
          >
            <div className="w-full h-64 mb-4">
              <img
                src={tvShows.largePoster}
                alt={tvShows.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TvShowsFeatures;
