import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/movies/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Movie not found");
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300"
      >
        ⬅ Back
      </button>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img src={movie.largePoster} alt={movie.title} className="w-64 h-auto rounded-lg shadow-md" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{movie.title}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {movie.year} | {movie.genre} | rent:$ {movie.rentPrice} | Buy:$ {movie.buyPrice}
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">{movie.synopsis}</p>
        
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
