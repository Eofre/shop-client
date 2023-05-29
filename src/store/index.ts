import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { authReducer } from './slices/auth';
import { cartReducer } from './slices/cart';
import { cartItemReducer } from './slices/cartItem';

const store = configureStore({
  reducer: {
    product: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    cartItem: cartItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
