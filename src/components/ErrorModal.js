import styles from "./components.module.css";
import { createPortal } from "react-dom";

const ErrorModal = ({ error, clearError }) => {
  return createPortal(
    <div className={styles.errorModal}>
      <button className={styles.errorClose} onClick={clearError}>
        &times;
      </button>
      <div className={styles.errorMessage}>
        <h2>{error}</h2>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ErrorModal;
