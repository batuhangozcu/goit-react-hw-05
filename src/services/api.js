import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDYzODE4Mzk5ZWEzYmFjYzAyY2Y1YTU4MjMwMmRkOSIsIm5iZiI6MTc0Mjg0NjEzOC43OTIsInN1YiI6IjY3ZTFiOGJhMGVlNTNkNGU3MWYwNDgyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.981ZYDmXNyJVeBBCk2_0NbQRVOxTWFFrTzknY_5lBEk";
const BASE_URL = "https://api.themoviedb.org/3";
const HEADERS = { Authorization: `Bearer ${API_KEY}` };

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
    headers: HEADERS,
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers: HEADERS,
  });
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: HEADERS,
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: HEADERS,
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    headers: HEADERS,
    params: { query },
  });
  return response.data.results;
};
