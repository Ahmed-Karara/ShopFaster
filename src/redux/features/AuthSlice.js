import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  userId: null,
  userName: null,
  userEmail: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.isLoggedin = true;
      state.userId = action.payload.id;
      state.userEmail = action.payload.email;
      state.userName = action.payload.userName;
    },
    removeActiveUser: (state, action) => {
      state.isLoggedin = false;
      state.userId = null;
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, removeActiveUser } = AuthSlice.actions;

export const selectedUser = (state) => state.auth;

export default AuthSlice.reducer;
