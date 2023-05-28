import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { fetchLoginCheck } from "../store/slices/auth";

export const useAuthCheck = () => {
    // const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  
  useEffect(() => {
    dispatch(fetchLoginCheck());
  }, []);

    return Boolean(user);
  };