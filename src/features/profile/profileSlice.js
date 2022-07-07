//esse slice vai se ocupar de fazer a consulta bancaria, ou seja, pegar os dados atraves do token

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("ArgentBank"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  // email: "",
  // password: "",
  // firstName: "",
  // lastName: "",
};

export const profile = createAsyncThunk(
  "profiles/profile",
  async (profileData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;

      return await profileService.profile(profileData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      // state.email = "";
      // state.password = "";
      // state.firstName = "";
      // state.lastName = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profiles.push(action.payload);
      })
      .addCase(profile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
