import { Route, Routes } from "react-router-dom";
import { LoginProvider } from "./hok/LoginProvider";
import { CartProvider } from "./hok/CartProvider";
import { Home, About, ShoppingCart, SingleProduct } from "./pages";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <CartProvider>
          <Routes path="/">
            <Route path="/" element={<AppHeader />}>
              <Route index element={<Home />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/products/:productId" element={<SingleProduct />} />
            </Route>
          </Routes>
        </CartProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
