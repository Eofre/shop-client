import { FC } from "react";
import classes from "./LoginPage.module.scss";
import { Container } from "../../components/Container";
import { LoginForm } from "../../components/LoginForm";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchLoginUser } from "../../store/slices/auth";
import { IUserLogin } from "../../types/types";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { Navigate } from "react-router-dom";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (userData: IUserLogin) => {
    dispatch(fetchLoginUser(userData));
  };

  // const auth = useAuthCheck();

  // if (auth) {
  //   return <Navigate to="/" />;
  // }

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
