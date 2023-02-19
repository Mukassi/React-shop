import { useParams } from "react-router-dom";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import { useSelector } from "react-redux";
import ViewSingleProduct from "../components/ViewSingleProduct";
import { Spinner } from "../components/Spinner/Spinner";

const SingleProduct = () => {
  const { productsStatus } = useSelector((state) => state.products);
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);
  const singleProduct = products.find((element) => element.id === +productId);

  if (productsStatus === "loading") return <Spinner />;
  if (productsStatus === "error")
    return <ErrorModal error="Ошибка при загурзе данного товара" />;
  return (
    <>{singleProduct ? <ViewSingleProduct product={singleProduct} /> : null}</>
  );
};

export default SingleProduct;
