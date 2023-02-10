import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartButtons from "../components/CartButtons";
import useProductService from "../services/ProductService";
import styles from "./pages.module.css";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { getOneProduct } = useProductService();
  const { productId } = useParams();

  useEffect(() => {
    updateProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const updateProduct = () => {
    getOneProduct(productId).then(onProductLoaded);
  };
  const onProductLoaded = (newProduct) => {
    setProduct(newProduct);
  };

  const content = product ? <View product={product} /> : null;
  return <>{content}</>;
};

const View = ({ product }) => {
  let { title, price, images, description } = product;
  return (
    <>
    <div className={styles.singleProduct}>
      <img src={images[0]} alt={title} className={styles.singleProductImg}/>
      <div>
        <h2 className={styles.singleProductName}>{title}</h2>
        <p className={styles.singleProductDesc}>{description}</p>
        <div className={styles.singleProductPrice}>{price}$</div>
      </div>

    </div>
    <CartButtons count="1" price={price}/>
    </>
  );
};
export default SingleProduct;
