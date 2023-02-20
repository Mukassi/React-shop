import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useHttp from "../services/useHttp";

const initialState = {
  products: [],
  productsStatus: "idle",
  httpLimit: 4,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  (limit) => {
    const { request } = useHttp();
    return request(`https://fakestoreapi.com/products?limit=${limit}`);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearError(state) {
      state.productsStatus = "";
    },
    increaseHttpLimit(state) {
      state.httpLimit += 4;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsStatus = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.productsStatus = "error";
      });
  },
});

const { reducer, actions } = productsSlice;
export const { clearError, increaseHttpLimit } = actions;
export default reducer;
