import { ButtonHTMLAttributes, FC } from "react";
import classes from "./MyButton.module.scss";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const MyButton: FC<MyButtonProps> = ({ ...rest }) => {
  return <button className={classes.myButton} {...rest}></button>;
};
