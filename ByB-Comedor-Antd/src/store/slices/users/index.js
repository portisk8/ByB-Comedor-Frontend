import { createSlice } from "@reduxjs/toolkit";
import jwt from "jwt-decode";
import { axiosRequest } from "../../../utils/requests";
import CONFIG from "../../../common/environment";
import { loginService, refreshTokenService } from "../../../services/user";

const API_URL = CONFIG.API_URL;

export const userSlice = createSlice({
  name: "users",
  initialState: {
    logedIn: false,
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.logedIn = true;
      const user = jwt(action.payload.token); // decode your token here

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    deleteCurrentUser: (state, action) => {
      state.currentUser = null;
      state.logedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
    },
  },
});

export const { setCurrentUser, deleteCurrentUser } = userSlice.actions;

export default userSlice.reducer;

// export const login = () =>{
//     return ()=>{}
// }
//Mejor diseñado
export const login = (user) => async (dispatch) => {
  const response = await loginService(user);
  if (!response.data) return;
  dispatch(setCurrentUser(response.data));
  return response.data;
};

export const logout = () => async (dispatch) => {
  console.log("DELETE USER");
  dispatch(deleteCurrentUser());
};

export const refreshToken = () => async (dispatch) => {
  const response = await refreshTokenService();
  if (!response.data) return;
  await dispatch(setCurrentUser(response.data));
  return response.data;
};
