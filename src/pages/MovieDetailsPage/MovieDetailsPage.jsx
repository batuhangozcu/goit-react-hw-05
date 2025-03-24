import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

function MovieDetailsPage() {
  const { movieId } = useParams();
  return (
    <div>
      MovieDetailsPage - {movieId}
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
