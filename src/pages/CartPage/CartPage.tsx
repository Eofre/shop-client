import { FC } from "react";
import classes from "./CartPage.module.scss";

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = () => {
  return <section className={classes.cartPage}>Корзина</section>;
};
