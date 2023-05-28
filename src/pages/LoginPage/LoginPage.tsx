import { FC } from "react";
import classes from "./LoginPage.module.scss";
import { Container } from "../../components/Container";
import { LoginForm } from "../../components/LoginForm";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchLoginUser } from "../../store/slices/auth";
import { IUserLogin } from "../../types/types";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (userData: IUserLogin) => {
    dispatch(fetchLoginUser(userData));
    console.log(userData);
  };

  return (
    <section className={classes.loginPage}>
      <Container>
        <div className={classes.wrapper}>
          <LoginForm handlerLogin={handleLogin} />
        </div>
      </Container>
    </section>
  );
};
