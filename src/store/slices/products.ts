import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductState } from '../../types/types';
import axios from '../../api/axiosInstance';

const initialState: IProductState = {
  products: [],
  loading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const { data } = await axios.get('product/all')
  return data
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products.';
      });
  },
});

export const productsReducer = productsSlice.reducer;
