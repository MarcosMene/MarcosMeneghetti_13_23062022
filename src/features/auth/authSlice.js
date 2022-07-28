import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("ArgentBank"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isSignedUp: false,
  isEditMode: false,
  isBackground: false,
  isRemembered: false,
  message: "",
  email: "",
  firstName: "",
  lastName: "",
};

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

//profile
export const profile = createAsyncThunk(
  "auth/profile",
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

//profile update
export const profileUpdate = createAsyncThunk(
  "auth/profileUpdate",
  async (profileUpdateData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;

      return await authService.profileUpdate(profileUpdateData, token);
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
      state.firstName = "";
      state.lastName = "";
      state.isRemembered = false;
      state.isBackground = false;
    },
    userDataEdited: (state) => {
      state.isEditMode = true;
    },
    userDataCancelled: (state) => {
      state.isEditMode = false;
    },
    userBackgroundBlack: (state) => {
      state.isBackground = false;
    },
    userBackgroundBlue: (state) => {
      state.isBackground = true;
    },
  },

  //extrareducers for async/await functions
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload; //payload for authService.signup(user) signup function service
        state.isError = false;
        state.message = "";
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
      .addCase(profile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.isError = false;
        state.message = "";
      })
      .addCase(profile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(profileUpdate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.isError = false;
        state.message = "";
      })
      .addCase(profileUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const {
  reset,
  userDataEdited,
  userDataCancelled,
  userBackgroundBlack,
  userBackgroundBlue,
} = authSlice.actions;
export default authSlice.reducer;
