import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import "./AppHeader.css";
import cartIcon from "../images/cart.svg"
import LogInModal from "./LogInModal";
import LoginButtons from "./LoginButtons";

const AppHeader = () => {
  const [logInModal, setLogInModal] = useState(false);
  const { totalPrice, totalCount } = useSelector((state) => state.cart);
  const { loginStatus } = useSelector((state) => state.login);
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
          {loginStatus ? (
            <div>
              <span className="cart">
                В корзине {totalCount} товаров на сумму {totalPrice}$
              </span>
              <NavLink to="/shoppingcart" className="navlink">
                Корзина
                <img src={cartIcon} alt="cartIcon" className="cartIcon"/>
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
