import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api"; // API'yi doğru şekilde içe aktarın
import Loader from "../Loader/Loader";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Failed to fetch movie reviews", error);
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <div>
      <ul className={styles.reviews}>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
