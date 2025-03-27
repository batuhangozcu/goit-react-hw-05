import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.blank}>
      <h4>404</h4>
      <p>Page Not Found</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default NotFoundPage;
