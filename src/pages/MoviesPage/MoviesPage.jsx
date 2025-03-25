import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    const getMovies = async () => {
      if (!query) {
        return;
      }

      setLoading(true);
      try {
        const moviesData = await searchMovies(query);
        setMovies(moviesData);
      } catch (error) {
        alert(`Something went wrong. Please try again. (${error})`);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Search for movies..." />
        <button type="submit">Search</button>
      </form>

      {loading && <Loader />}

      {!loading && movies.length > 0 && <MovieList movies={movies} />}

      {!loading && query && movies.length === 0 && (
        <p className={styles.warning}>No movies found for your search.</p>
      )}
    </div>
  );
};

export default MoviesPage;
