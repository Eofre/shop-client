import { useEffect, useState } from 'react';
import { IShoppingCart } from '../types/types';
import { useAppSelector } from './useAppSelector';
import { useAppDispatch } from './useAppDispatch';
import { findCartItem } from '../store/slices/cartItem';


const useCheckCartItem = (userId: string, productId: string): boolean => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findCartItem({userId, productId}))
  }, []);

  const item = useAppSelector((state) => state.cartItem);

  return Boolean(item);
};

export default useCheckCartItem;
