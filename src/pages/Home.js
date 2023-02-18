import { useState, useEffect } from "react";
import ErrorModal from "../components/ErrorModal";
import useProductService from "../services/ProductService";
import ProductsList from "../components/ProductsList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { getAllProducts, error, clearError } = useProductService();

  useEffect(() => {
    getAllProducts().then(getNewProducts);
  }, []);

  const getNewProducts = (products) => {
    setProducts([...products]);
  };

  return (
    <>
      {error ? <ErrorModal error={error} clearError={clearError} /> : null}
      <ProductsList products={products} />
    </>
  );
};

export default Home;
