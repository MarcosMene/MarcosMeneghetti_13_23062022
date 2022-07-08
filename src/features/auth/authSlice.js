import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("ArgentBank"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  email: "",
  password: "",
  firstName: "tect",
  lastName: "",
};

//signup user
export const signup = createAsyncThunk(
  "auth/signup",
  async (user, thunkAPI) => {
    try {
      return await authService.signup(user);
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

//login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const profile = createAsyncThunk(
  "profile/profile",
  async (profileData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;

      return await authService.profile(profileData, token);
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

//Logout to delete localstore value
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.email = "";
      state.password = "";
      state.firstName = "";
      state.lastName = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload; //payload for authService.signup(user) signup function service
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //payload for message because rejectWithValue(message)
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload; //payload for authService.signup(user) signup function service
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; //payload for message because rejectWithValue(message)
        state.user = null;
      })

      .addCase(profile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profile.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.email = action.payload;
      })
      .addCase(profile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
