import { FC } from "react";
import { CatalogPage } from "../../pages/CatalogPage";
import { LoginPage } from "../../pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "../../pages/CartPage";
import { ProductPage } from "../../pages/ProductPage";
import { Layout } from "../Layout";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
