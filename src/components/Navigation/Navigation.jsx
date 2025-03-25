import { NavLink } from "react-router-dom";
import MovieHorizon from "../../assets/MovieHorizon.png";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={styles.header}>
      <NavLink to="/" end>
        <img src={MovieHorizon} alt="Movie Horizon" width="200" />
      </NavLink>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
