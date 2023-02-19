import { createSlice } from "@reduxjs/toolkit";

const initialState = { totalPrice: 0, totalCount: 0, cartProducts: [] };

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
      state.totalCount = state.cartProducts.reduce((sum, product) => {
        return product.count + sum;
      }, 0);
      state.totalPrice = state.cartProducts
        .reduce((sum, product) => {
          return +product.price * +product.count + sum;
        }, 0)
        .toFixed(2);
    },
    changeItemCount(state, action) {
      const findItem = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (findItem) {
        findItem.count += action.payload.value;
        state.totalPrice = state.cartProducts
          .reduce((sum, product) => {
            return +product.price * +product.count + sum;
          }, 0)
          .toFixed(2);
        state.totalCount = state.cartProducts.reduce((sum, product) => {
          return product.count + sum;
        }, 0);
      }
    },
    deleteFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      state.totalPrice = state.cartProducts
        .reduce((sum, product) => {
          return +product.price * +product.count + sum;
        }, 0)
        .toFixed(2);
      state.totalCount = state.cartProducts.reduce((sum, product) => {
        return product.count + sum;
      }, 0);
    },
    clearCart(state) {
      return (state = initialState);
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, deleteFromCart, clearCart, changeItemCount } =
  cartSlice.actions;
