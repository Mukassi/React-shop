import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import styles from "./components.module.css";

const CartButtons = (props) => {
  const { count, product } = props;

  const dispatch = useDispatch();
  const { loginStatus } = useSelector((state) => state.login);

  const onAddToCart = (count, product) => {
    for (let i = 0; i < +count; i++) {
      dispatch(addToCart(product));
    }
  };

  return (
    <button
      onClick={() => onAddToCart(count, product)}
      disabled={!loginStatus}
      className={styles.cartButtons}
    >
      {loginStatus ? "Купить" : "Чтобы добавить товар в корзину залогинтесь"}
    </button>
  );
};

export default CartButtons;
