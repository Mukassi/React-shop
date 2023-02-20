import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: true,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeLoginStatus(state, action) {
      state.loginStatus = action.payload;
    },
  },
});

export default loginSlice.reducer;

export const { changeLoginStatus } = loginSlice.actions;
