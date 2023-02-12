import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartButtons from "../components/CartButtons";
import styles from "./pages.module.css";
import useProductService from "../services/ProductService";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { getAllProducts } = useProductService();

  useEffect(() => {
    getAllProducts().then(getNewProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNewProducts = (products) => {
    setProducts([...products]);
  };

  const renderProducts = (arr) => {
    const items = arr.map((product) => {
      let { id, title, price, images } = product;
      return (
        <li key={id}>
          <img src={images[0]} alt={title} className={styles.productImg} />
          <div className={styles.productGrid}>
            <Link to={`/products/${id}`} className={styles.productName}>
              {title}
            </Link>
            <p className={styles.productPrice}>Price: {price}$</p>
            <div className={styles.productBtn}><CartButtons count="1" price={price} /></div>
          </div>
        </li>
      );
    });
    return <ul className={styles.products}>{items}</ul>;
  };

  let items = renderProducts(products);
  return <>{items}</>;
};

export default Home;
