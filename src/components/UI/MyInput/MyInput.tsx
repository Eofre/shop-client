import { FC, InputHTMLAttributes } from "react";
import classes from "./MyInput.module.scss";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const MyInput: FC<MyInputProps> = ({ ...rest }) => {
  return <input {...rest} className={classes.input} />;
};
