import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import CartList from "../components/CartList";
import styles from "./pages.module.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { totalCount, totalPrice } = useSelector((state) => state.cart);
  const { loginStatus } = useSelector((state) => state.login);

  const onClearCart = () => {
    console.log("clear");
    dispatch(clearCart());
  };
  if (!loginStatus) {
    return <h1>Сначала вам нужно залогиниться</h1>;
  }
  return (
    <>
      <h1>Корзина</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID товара</th>
            <th>Название товара</th>
            <th>Цена за единицу</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <CartList />
        <tfoot className={styles.tableFoot}>
          <tr>
            <td colSpan="3">Итого:</td>
            <td>{totalCount}</td>
            <td>{totalPrice}</td>
            <td>
              <button className={styles.tableButton} onClick={onClearCart}>
                Очистить корзину
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className={styles.checkoutContainer}>
        <button className={styles.tableButton} disabled>
          Оплатить
        </button>
      </div>
    </>
  );
};

export default ShoppingCart;
