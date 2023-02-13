import { Link } from "react-router-dom";
import styles from "./pages.module.css";
const Page404 = () => {
  return (
    <div className={styles.page404}>
      <h1>Что-то пошло не так. Данной страницы не существует</h1>
      <Link to="/" className={styles.homeLink}>
        Вернуться на главную страницу
      </Link>
    </div>
  );
};

export default Page404;
