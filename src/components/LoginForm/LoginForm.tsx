import React, { FC } from "react";
import classes from "./LoginForm.module.scss";
import { MyInput } from "../UI/MyInput";
import { MyButton } from "../UI/MyButton";
import { Link } from "react-router-dom";

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  return (
    <form className={classes.loginForm}>
      <h1>Добро пожаловать!</h1>
      <p>Для входа на сайт необходимо авторизироваться.</p>
      <div className={classes.inputs}>
        <MyInput type="text" placeholder="Логин" />
        <MyInput type="password" placeholder="Пароль" />
        <div className={classes.text}>
          <span>Нет аккаунта?</span>
          <Link to="/">Зарегистрироваться</Link>
        </div>
      </div>
      <MyButton type="submit">Войти</MyButton>
    </form>
  );
};
