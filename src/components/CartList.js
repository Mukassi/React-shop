import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { deleteFromCart, changeItemCount } from "../store/cartSlice";
import styles from "./components.module.css";

const CartList = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onChangeCount = (value, id) => {
    if (
      cartProducts.find((element) => element.id === id).count < 2 &&
      value < 1
    )
      return;
    dispatch(changeItemCount({ value, id }));
  };
  const onDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };
  return (
    <tbody>
      {cartProducts.map((product) => {
        const { id, title, price, count } = product;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{price.toFixed(2)}$</td>
            <td>
              <Counter count={count} onChangeCount={onChangeCount} id={id} />
            </td>
            <td>{(price * count).toFixed(2)}</td>
            <td>
              <button
                className={styles.tableButton}
                onClick={() => onDeleteFromCart(id)}
              >
                Удалить
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default CartList;
