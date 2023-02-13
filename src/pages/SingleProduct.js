import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorModal from "../components/ErrorModal";
import useProductService from "../services/ProductService";
import View from "../components/ViewProduct";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);

  const { getOneProduct, error, clearError } = useProductService();
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
  const showErrorModal = () => {
    setTimeout(() => clearError(), 15000);
    return <ErrorModal error={error} clearError={clearError} />;
  };
  const content = product ? <View product={product} /> : null;
  return (
    <>
      {error ? showErrorModal() : null}
      {content}
    </>
  );
};

export default SingleProduct;
