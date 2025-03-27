import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import styles from "./MovieDetailsPage.module.css";

// Top20 Languages in movie sector
const languageNames = {
  en: "English",
  tr: "Turkish",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  ja: "Japanese",
  pt: "Portuguese",
  ru: "Russian",
  zh: "Chinese",
  ar: "Arabic",
  ko: "Korean",
  hi: "Hindi",
  bn: "Bengali",
  pl: "Polish",
  sv: "Swedish",
  nl: "Dutch",
  cs: "Czech",
  da: "Danish",
  no: "Norwegian",
};

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
    <Loader />;
  }

  const language =
    languageNames[movie.original_language] || movie.original_language;

  return (
    <div className={styles.container}>
      <Link className={styles.back} to={backLink}>
        Go Back
      </Link>
      <h2>{`${movie.title} (${new Date(
        movie.release_date
      ).getFullYear()})`}</h2>
      <p className={styles.score}>
        User score:
        <span
          className={movie.vote_average > 7 ? styles.active : styles.passive}
        >
          {movie.vote_average.toFixed(1)} / 10
        </span>
      </p>
      <div className={styles.general}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.details}>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          <h3>Language</h3>
          <p>{language}</p>
          <h3>Runtime</h3>
          <p>{movie.runtime} minutes</p>
        </div>
      </div>
      <h3>Additional information</h3>
      <div className={styles.additional}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetailsPage;
