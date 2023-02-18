import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorModal from "../components/ErrorModal";
import useProductService from "../services/ProductService";
import ViewSingleProduct from "../components/ViewSingleProduct";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);

  const { getOneProduct, error, clearError } = useProductService();
  const { productId } = useParams();

  useEffect(() => {
    getOneProduct(productId).then(setProduct)
  }, [productId]);

  return (
    <>
      {error ? <ErrorModal error={error} clearError={clearError} /> : null}
      {product ? <ViewSingleProduct product={product} /> : null}
    </>
  );
};

export default SingleProduct;
