import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            width="100"
          />
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
