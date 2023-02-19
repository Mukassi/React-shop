import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productsSlice";
import loginSlice from "./loginSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  products: productSlice,
  login: loginSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
