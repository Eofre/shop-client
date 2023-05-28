import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { authReducer } from './slices/auth';

const store = configureStore({
  reducer: {
    product: productsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
