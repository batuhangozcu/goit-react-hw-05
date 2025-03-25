import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import Loader from "../Loader/Loader";
import placeholder from "../../assets/placeholder.png";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        alert("Failed to fetch movie cast", error);
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width="100"
              />
            ) : (
              <img
                src={placeholder}
                alt="No image available"
                width="100"
                height="150"
              ></img>
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
