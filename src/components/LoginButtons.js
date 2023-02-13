import { useContext } from "react";
import { LoginContext } from "../hok/LoginProvider";
import styles from "./components.module.css";

const LoginButtons = (props) => {
  const { isLoggedIn, changeLoginStatus } = useContext(LoginContext);
  return (
    <div>
      <button
        onClick={() =>
          isLoggedIn ? changeLoginStatus(false) : props.setLogInModal(true)
        }
        className={styles.login}
      >
        {isLoggedIn ? "Выход" : "Войти"}
      </button>
    </div>
  );
};

export default LoginButtons;
