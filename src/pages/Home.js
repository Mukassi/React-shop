import { useEffect } from "react";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import ProductsList from "../components/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, increaseHttpLimit } from "../store/productsSlice";
import { Spinner } from "../components/Spinner/Spinner";
import styles from "./pages.module.css";

const Home = () => {
  const { products, productsStatus, httpLimit } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(httpLimit));
  }, [httpLimit]);
  const onLoadMore = () => {
    dispatch(increaseHttpLimit());
  };

  if (productsStatus === "error")
    return <ErrorModal error="Ошибка при загурзе данных" />;
  return (
    <>
      <ProductsList products={products} />
      {productsStatus === "loading" ? (
        <Spinner />
      ) : (
        <div className={styles.loadMoreContainer}>
          <button onClick={() => onLoadMore()} className={styles.loadMore}>
            Загрузить больше товаров
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
