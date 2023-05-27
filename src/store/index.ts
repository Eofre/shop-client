import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';

const store = configureStore({
  reducer: {
    product: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;