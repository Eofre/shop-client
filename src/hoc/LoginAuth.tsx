import { Navigate, useLocation } from "react-router";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { FC, ReactNode } from "react";

interface LoginAuth {
  children: ReactNode;
}

export const LoginAuth: FC<LoginAuth> = ({ children }) => {
  const location = useLocation();
  const auth = useAuthCheck();

  if (auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <>{children}</>;
};
