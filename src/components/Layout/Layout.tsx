import { FC } from "react";
import { Header } from "../Header";
import { Outlet } from "react-router";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
