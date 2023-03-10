import { Route, Routes } from "react-router-dom";


import { Home, About, ShoppingCart, SingleProduct, Page404 } from "./pages";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="App">


          <Routes path="/">
            <Route path="/" element={<AppHeader />}>
              <Route index element={<Home />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />

              <Route path="/products/:productId" element={<SingleProduct />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>

    </div>
  );
}

export default App;
