import { FC } from "react";
import { Header } from "../Header";
import { Outlet } from "react-router";
import { Container } from "../Container";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
