import { useAppSelector } from "./useAppSelector";

export const useAuthCheck = () => {
    const user = useAppSelector((state) => state.auth.user);
    return Boolean(user);
  };