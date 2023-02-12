import { useState, useContext } from "react";
import { CartContext } from "../hok/CartProvider";
import { NavLink, Outlet } from "react-router-dom";
import LogInModal from "./LogInModal";
import "./AppHeader.css";
const AppHeader = () => {
  const [logInModal, setLogInModal] = useState(false);
  const { totalPrice, productsCount } = useContext(CartContext);
  const onCloseModal = () => {
    setLogInModal(false);
  };
  return (
    <>
      <div className="App-header">
        <div className="logo">LOGO</div>
        <div className="links">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/aboutus" className="navlink">
          About
        </NavLink>
        <div >        <span className="cart">In cart {productsCount} for {totalPrice}$ </span>

          <NavLink to="/shoppingcart" className="navlink">
            Cart
          </NavLink>


        </div>
        <div>
          <button onClick={() => setLogInModal(true)} className="login">
            LogIn
          </button>
        </div>
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
