import { Navigate, useLocation } from "react-router";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { FC, ReactNode } from "react";

interface RequireAuth {
  children: ReactNode;
}

export const RequireAuth: FC<RequireAuth> = ({ children }) => {
  const location = useLocation();
  const auth = useAuthCheck();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};
