import { useState } from "react";

import styles from "./components.module.css";
import Counter from "./Counter";
import CartButtons from "./CartButtons";
import { useSelector } from "react-redux";

const ViewSingleProduct = ({ product }) => {
  let { title, price, image, description } = product;
  const [count, setCount] = useState(1);

  const { loginStatus } = useSelector((state) => state.login);
  const onChangeCount = (value) => {
    if (count === 0 && value < 0) return;
    setCount(count + value);
  };
  return (
    <>
      <div className={styles.singleProduct}>
        <img src={image} alt={title} className={styles.singleProductImg} />
        <div>
          <h1 className={styles.singleProductName}>{title}</h1>
          <p className={styles.singleProductDesc}>{description}</p>
          <div className={styles.singleProductPrice}>{price}$</div>
          <div>
            {loginStatus ? (
              <Counter count={count} onChangeCount={onChangeCount} />
            ) : null}
            <CartButtons count={count} product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSingleProduct;
