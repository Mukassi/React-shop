import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";
import styles from "./components.module.css";

const ProductsList = ({ products }) => {
  return (
    <ul className={styles.products}>
      {products.map((product) => {
        let { id, title, price, image } = product;
        return (
          <li key={id}>
            <img src={image} alt={title} className={styles.productImg} />
            <div className={styles.productGrid}>
              <Link to={`/products/${id}`} className={styles.productName}>
                {title}
              </Link>
              <p className={styles.productPrice}>Price: {price}$</p>
              <div className={styles.productBtn}>
                <CartButtons count="1" product={product} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
