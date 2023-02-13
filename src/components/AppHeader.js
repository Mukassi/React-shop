import { useState, useContext } from "react";
import { CartContext } from "../hok/CartProvider";
import { LoginContext } from "../hok/LoginProvider";
import { NavLink, Outlet } from "react-router-dom";
import "./AppHeader.css";
import LogInModal from "./LogInModal";
import LoginButtons from "./LoginButtons";

const AppHeader = () => {
  const [logInModal, setLogInModal] = useState(false);
  const { totalPrice, productsCount } = useContext(CartContext);
  const { isLoggedIn } = useContext(LoginContext);
  const onCloseModal = () => {
    setLogInModal(false);
  };
  return (
    <>
      <div className="app-header">
        <div className="logo">LOGO</div>
        <div className="links">
          <NavLink to="/" className="navlink">
            Главная
          </NavLink>
          <NavLink to="/aboutus" className="navlink">
            О Магазине
          </NavLink>
          {isLoggedIn ? (
            <div>
              <span className="cart">
                В корзине {productsCount} товаров на сумму {totalPrice}$
              </span>
              <NavLink to="/shoppingcart" className="navlink">
                Корзина
              </NavLink>
            </div>
          ) : null}
          <LoginButtons setLogInModal={setLogInModal} />
        </div>
      </div>
      <div className="container">
        {logInModal ? <LogInModal onCloseModal={onCloseModal} /> : null}
        <Outlet />
      </div>
    </>
  );
};

export default AppHeader;
