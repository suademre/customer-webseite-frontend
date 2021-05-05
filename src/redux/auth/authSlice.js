import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => ({
      ...action.payload,
    }),
    refresh: (state, action) => ({
      ...action.payload,
    }),
    logout: () => initialState,
  },
});

export const { login, refresh, logout } = authSlice.actions;

export default authSlice.reducer;
