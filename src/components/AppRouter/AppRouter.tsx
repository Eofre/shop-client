import { FC } from "react";
import { CatalogPage } from "../../pages/CatalogPage";
import { LoginPage } from "../../pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "../../pages/CartPage";
import { ProductPage } from "../../pages/ProductPage";
import { Layout } from "../Layout";
import { RequireAuth } from "../../hoc/RequireAuth";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <CatalogPage />
            </RequireAuth>
          }
        />
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <ProductPage />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
