import { fetchTrendingMovies } from "../../services/api";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import styles from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoading(true);
      try {
        const moviesData = await fetchTrendingMovies();
        setMovies(moviesData);
      } catch (error) {
        alert(`Something went wrong. Please try again. (${error})`);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
