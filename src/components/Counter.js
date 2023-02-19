import styles from "./components.module.css";
const Counter = ({ count, onChangeCount, id }) => {
  return (
    <div>
      <button
        className={styles.minus}
        onClick={() => onChangeCount(-1, id)}
      ></button>
      <input
        type="number"
        value={count}
        className={styles.inputCounter}
        readOnly
      ></input>
      <button
        className={styles.plus}
        onClick={() => onChangeCount(1, id)}
      ></button>
    </div>
  );
};

export default Counter;
