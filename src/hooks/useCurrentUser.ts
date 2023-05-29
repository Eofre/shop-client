import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { fetchLoginCheck } from "../store/slices/auth";

export const useCurrentUser = () => {
  const user = useAppSelector((state) => state.auth.user);

    return user;
  };