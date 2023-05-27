import { FC } from "react";
import classes from "./Header.module.scss";
import { Container } from "../Container";
import { Navigation } from "../Navigation";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={classes.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};
