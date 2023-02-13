import { useState, useContext } from "react";
import { LoginContext } from "../hok/LoginProvider";
import styles from "./components.module.css";
import Counter from "./Counter";
import CartButtons from "./CartButtons";

const View = ({ product }) => {
  let { title, price, images, description } = product;
  const [count, setCount] = useState(1);
  const { isLoggedIn } = useContext(LoginContext);
  const onChangeCount = (value) => {
    if (count === 0 && value < 0) return;
    setCount(count + value);
  };
  return (
    <>
      <div className={styles.singleProduct}>
        <img src={images[0]} alt={title} className={styles.singleProductImg} />
        <div>
          <h1 className={styles.singleProductName}>{title}</h1>
          <p className={styles.singleProductDesc}>{description}</p>
          <div className={styles.singleProductPrice}>{price}$</div>
          <div>
            {isLoggedIn ? (
              <Counter count={count} onChangeCount={onChangeCount} />
            ) : null}
            <CartButtons count={count} price={price} />
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
