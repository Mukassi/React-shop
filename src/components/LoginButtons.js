import { useSelector, useDispatch } from "react-redux";
import { changeLoginStatus } from "../store/loginSlice";
import styles from "./components.module.css";

const LoginButtons = (props) => {
  const { loginStatus } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          loginStatus
            ? dispatch(changeLoginStatus(false))
            : props.setLogInModal(true)
        }
        className={styles.login}
      >
        {loginStatus ? "Выход" : "Войти"}
      </button>
    </div>
  );
};

export default LoginButtons;
