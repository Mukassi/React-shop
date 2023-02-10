import { useState, useContext } from "react";
import { CartContext } from "../hok/CartProvider";
import { NavLink, Outlet } from "react-router-dom";
import LogInModal from "./LogInModal";
import "./AppHeader.css"
const AppHeader = () => {
  const [logInModal, setLogInModal] = useState(false);
  const {totalPrice, productsCount} = useContext(CartContext)
  const onCloseModal = () => {
    setLogInModal(false)
  }
  return (
    <>
      <div className="App-header">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/aboutus">О магазине</NavLink>
        <NavLink to="/shoppingcart">Корзина В корзине {productsCount} товаров на сумму {totalPrice}</NavLink>
        <button onClick={() => setLogInModal(true)}>LogIn</button>
      </div>
      <div>
        {logInModal ? <LogInModal onCloseModal={onCloseModal}/> : null}
        <Outlet />
      </div>
    </>
  );
};

export default AppHeader;
