import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';
import { IAddToCartDto, IShoppingCart } from '../../types/types';

interface ShoppingCartState {
  carts: IShoppingCart[];
  loading: boolean;
  error: string | null;
}

const initialState: ShoppingCartState = {
  carts: [],
  loading: true,
  error: null,
};

export const fetchShoppingCart = createAsyncThunk('shoppingCart/fetchShoppingCart', async (userId: string) => {
  const { data } = await axios.get(`shopping-cart/${userId}`);
  return data;
});

export const addToCart = createAsyncThunk('shoppingCart/addToCart', async (addToCartDto: IAddToCartDto) => {
  const { data } = await axios.post('shopping-cart/add', addToCartDto);
  return data;
});

export const updateCount = createAsyncThunk('shoppingCart/updateCount', async ({ productId, count }: { productId: string, count: number }) => {
  const { data } = await axios.patch(`shopping-cart/count/${productId}`, { count });
  return data;
});

export const removeCartItem = createAsyncThunk(
  'shoppingCart/removeCartItem',
  async ({ userId, productId }: { userId: string | number; productId: string | number }) => {
    const { data } = await axios.delete(`shopping-cart/remove/${userId}/${productId}`);
    return data;
  }
);


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShoppingCart.fulfilled, (state, action: PayloadAction<IShoppingCart[]>) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(fetchShoppingCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch shopping cart.';
      })
      .addCase(addToCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<IShoppingCart>) => {
        state.loading = false;
        state.carts.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add item to cart.';
      })
      .addCase(updateCount.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCount.fulfilled, (state, action: PayloadAction<IShoppingCart>) => {
        state.loading = false;
        const { product, count } = action.payload;
        const item = state.carts.find(item => item.product.id === product.id);
        if (item) {
          item.count = count;
        }
      })
      .addCase(updateCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update item count.';
      })
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCartItem.fulfilled, (state, action: PayloadAction<{ userId: string | number; productId: string | number }>) => {
        state.loading = false;
        const { userId, productId } = action.payload;
        state.carts = state.carts.filter((item) => item.userId !== userId || item.product.id !== productId);
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to remove item from cart.';
      });
      
  },
});

export const cartReducer = cartSlice.reducer;
