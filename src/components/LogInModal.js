import styles from "./form.module.css";

const LogInModal = ({ onCloseModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.formContainer}>
        <button className={styles.modalClose} onClick={onCloseModal}>
          &times;
        </button>
        <div>
          <h1 >Введите ваши данные</h1>
          <form></form>
          <label htmlFor="login">Login</label>
          <input id="login" type="text" />
          <label htmlFor="pass">Password</label>
          <input id="pass" type="text" />
          <div >
            <button className={styles.formButtons}>Отмена</button>
            <button className={styles.formButtons}>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
