import styles from "./components.module.css";
const Counter = ({ count, onChangeCount }) => {
  return (
    <div>
      <button
        className={styles.minus}
        onClick={() => onChangeCount(-1)}
      ></button>
      <input
        type="number"
        value={count}
        className={styles.inputCounter}
        readOnly
      ></input>
      <button className={styles.plus} onClick={() => onChangeCount(1)}></button>
    </div>
  );
};

export default Counter;
