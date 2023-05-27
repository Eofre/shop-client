import { FC } from "react";
import { CatalogPage } from "../../pages/CatalogPage";
import { LoginPage } from "../../pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "../../pages/CartPage";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route index path="/" element={<CatalogPage />} />
      <Route index path="/login" element={<LoginPage />} />
      <Route index path="/cart" element={<CartPage />} />
    </Routes>
  );
};
