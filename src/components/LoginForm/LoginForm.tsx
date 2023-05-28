import { FC, useState } from "react";
import classes from "./LoginForm.module.scss";
import { MyInput } from "../UI/MyInput";
import { MyButton } from "../UI/MyButton";
import { Link } from "react-router-dom";
import { IUserLogin } from "../../types/types";

interface LoginFormProps {
  handlerLogin: (userData: IUserLogin) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ handlerLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData: IUserLogin = {
      username,
      password,
    };

    handlerLogin(userData);
  };

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <h1>Добро пожаловать!</h1>
      <p>Для входа на сайт необходимо авторизироваться.</p>
      <div className={classes.inputs}>
        <MyInput
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <MyInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className={classes.text}>
          <span>Нет аккаунта?</span>
          <Link to="/">Зарегистрироваться</Link>
        </div>
      </div>
      <MyButton type="submit">Войти</MyButton>
    </form>
  );
};
