import { useContext } from "react";
import { CartContext } from "../hok/CartProvider";
import { LoginContext } from "../hok/LoginProvider";
import styles from "./components.module.css";

const CartButtons = (props) => {
  const { count, price } = props;
  const { isLoggedIn } = useContext(LoginContext);
  const { updateCart } = useContext(CartContext);
  return (
    <button
      onClick={() => updateCart(+count, +price)}
      disabled={!isLoggedIn}
      className={styles.cartButtons}
    >
      {isLoggedIn ? "Купить" : "Чтобы добавить товар в корзину залогинтесь"}
    </button>
  );
};

export default CartButtons;
