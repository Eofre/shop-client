import { FC, ReactNode } from "react";
import classes from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
