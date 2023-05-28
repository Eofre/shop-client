import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";
import { ILoginState, IUserLogin } from "../../types/types";

export const fetchLoginUser = createAsyncThunk('login/fetchLoginUser', async (userData: IUserLogin) => {
    const { data } = await axios.post('user/login', userData, { withCredentials: true,});
    return data;
  });

export const fetchLogoutUser = createAsyncThunk(
    'logout/fetchLogoutUser',
    async () => {
      const { data } = await axios.get('user/logout');
      return data;
    }
  );

export const fetchLoginCheck = createAsyncThunk(
    'loginCheck/fetchLoginCheck',
    async () => {
      const { data } = await axios.get('user/login-check', { withCredentials: true,});
      return data;
    }
  );


  const initialState: ILoginState = {
      user: null,
      loading: false,
      error: null,
    };

  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchLoginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchLoginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(fetchLoginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to login.';
        })
        .addCase(fetchLogoutUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchLogoutUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = null;
        })
        .addCase(fetchLogoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to logout.';
        })
        .addCase(fetchLoginCheck.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchLoginCheck.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(fetchLoginCheck.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to check login status.';
        });
    },
  });
  

  export const authReducer =  authSlice.reducer;