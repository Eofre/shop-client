import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';
import { IAddToCartDto, IShoppingCart } from '../../types/types';

interface ShoppingCartItemState {
  cartItem: IShoppingCart | null;
  loading: boolean;
  error: string | null;
}

const initialState: ShoppingCartItemState = {
  cartItem: null,
  loading: true,
  error: null,
};


export const findCartItem = createAsyncThunk('shoppingCart/findCartItem', async ({ userId, productId }: { userId: string, productId: string | number}) => {
  const { data } = await axios.get(`shopping-cart/item/${userId}/${productId}`);
  return data;
});

const cartItemSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(findCartItem.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findCartItem.fulfilled, (state, action: PayloadAction<IShoppingCart | null>) => {
        state.loading = false;
        state.cartItem = action.payload;
      })
      .addCase(findCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to find item in cart.';
      });
  },
});

export const cartItemReducer = cartItemSlice.reducer;
