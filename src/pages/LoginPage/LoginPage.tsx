import { FC } from "react";
import classes from "./LoginPage.module.scss";
import { Container } from "../../components/Container";
import { LoginForm } from "../../components/LoginForm";
import img from "../../assets/images/main.jpg";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  return (
    <section className={classes.loginPage}>
      <Container>
        <div className={classes.wrapper}>
          {/* <img className={classes.img} src={img} alt="" /> */}
          <LoginForm />
        </div>
      </Container>
    </section>
  );
};
