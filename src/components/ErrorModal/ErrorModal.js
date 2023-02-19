import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { clearError } from "../../store/productsSlice";
import styles from "./styles.module.css";

const ErrorModal = ({ error }) => {
  const dispatch = useDispatch();

  const onClearError = () => {
    dispatch(clearError());
  };
  useEffect(() => {
    setTimeout(onClearError, 15000);
    return () => {
      clearTimeout(onClearError);
    };
  });
  return createPortal(
    <div className={styles.errorModal}>
      <button className={styles.errorClose} onClick={() => onClearError()}>
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
