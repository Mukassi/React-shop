import {useEffect} from "react";
import { createPortal } from "react-dom";
import styles from "./components.module.css";

const ErrorModal = ({ error, clearError }) => {
  useEffect(()=> {
    setTimeout(clearError, 15000)
    return () => {
      clearTimeout(clearError)
    }
  })
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
