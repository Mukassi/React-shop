import styles from "./form.module.css";

const LogInModal = ({ onCloseModal }) => {
  return (
    <div className={styles.modal}>
      <div>
        <button className={styles.modalClose} onClick={onCloseModal}>
          &times;
        </button>
        <div className={styles.modalContent}>
          <h1>Log in</h1>
          <form></form>
          <label htmlFor="login">Username</label>
          <input id="login" type="text" />
          <label htmlFor="pass">Password</label>
          <input id="pass" type="text" />
          <div>
            <button className={styles.modalButtons}>Отмена</button>
            <button className={styles.modalButtons}>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
