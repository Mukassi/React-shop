import { useState } from "react";

import { useDispatch } from "react-redux";
import { changeLoginStatus } from "../store/loginSlice";
import { users } from "../services/users";
import styles from "./components.module.css";

const LogInModal = ({ onCloseModal }) => {
  const [credentials, setCredentials] = useState({ login: "", pass: "" });
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setCredentials((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const onSaveCredentials = () => {
    let user = users.find(
      (user) =>
        user.login === credentials.login && user.pass === credentials.pass
    );
    if (user) {
      dispatch(changeLoginStatus(true));
      onCloseModal();
    } else {
      dispatch(changeLoginStatus(false));
      setIsValid(false);
    }
  };
  return (
    <div className={styles.modal}>
      <button className={styles.modalClose} onClick={onCloseModal}>
        &times;
      </button>
      <div className={styles.modalContent}>
        <h1>Вход</h1>
        <form></form>
        <label htmlFor="login">Имя пользователя</label>
        <input
          id="login"
          type="text"
          placeholder="Login"
          name="login"
          value={credentials.login}
          onChange={onInputChange}
        />
        <label htmlFor="pass">Пароль</label>
        <input
          id="pass"
          type="password"
          placeholder="*******"
          name="pass"
          value={credentials.pass}
          onChange={onInputChange}
        />
        {!isValid ? (
          <div className={styles.valid}>Введены неверные данные</div>
        ) : null}
        <div>
          <button className={styles.modalButtons} onClick={onCloseModal}>
            Отмена
          </button>
          <button className={styles.modalButtons} onClick={onSaveCredentials}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
