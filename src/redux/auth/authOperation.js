import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (acreditation) => {
  try {
    const { data } = await axios.post("/users/signup", acreditation);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk("auth/login", async (acreditation) => {
  try {
    const { data } = await axios.post("/users/login", acreditation);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  "/auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("users/current");
      return data;
    } catch (error) {}
  }
);

export { register, logIn, logOut, fetchCurrentUser };
