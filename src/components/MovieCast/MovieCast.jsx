import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import Loader from "../Loader/Loader";
import placeholder from "../../assets/placeholder.png";
import styles from "./MovieCast.module.css";

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
    <div className={styles.container}>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img src={placeholder} alt="No image available"></img>
            )}
            <p>{actor.name}</p>
            <h4>Character:</h4>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
