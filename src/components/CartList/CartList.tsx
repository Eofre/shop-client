import { FC } from "react";
import classes from "./CartList.module.scss";
import { IShoppingCart } from "../../types/types";
import { CartItem } from "../CartItem";

interface CartListProps {
  items: IShoppingCart[];
  handlerDelete: (productId: string | number) => void;
}

export const CartList: FC<CartListProps> = ({ items, handlerDelete }) => {
  return (
    <ul className={classes.cartList}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} handlerDelete={handlerDelete} />
      ))}
    </ul>
  );
};
