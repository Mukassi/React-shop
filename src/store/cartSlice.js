import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartProducts: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const findItem = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.cartProducts.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    changeItemCount(state, action) {
      const findItem = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (findItem) {
        findItem.count += action.payload.value;
      }
    },
    deleteFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart(state) {
      return (state = initialState);
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, deleteFromCart, clearCart, changeItemCount } =
  cartSlice.actions;
