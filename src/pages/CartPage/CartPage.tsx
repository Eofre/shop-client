import { FC, useEffect, useState } from "react";
import classes from "./CartPage.module.scss";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { fetchShoppingCart, removeCartItem } from "../../store/slices/cart";
import { CartLink } from "../../components/CartLink";
import { CartList } from "../../components/CartList";
import { IShoppingCart } from "../../types/types";

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = () => {
  const user = useCurrentUser();
  const dispatch = useAppDispatch();
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const handlerDelete = async (productId: string | number) => {
    if (user) {
      const removeToCartDto = {
        userId: user.userId,
        productId: productId,
      };
      await dispatch(removeCartItem(removeToCartDto));
      setShouldUpdate((prevState) => !prevState); // Toggle the value to trigger re-render
    }
  };

  useEffect(() => {
    dispatch(fetchShoppingCart(user ? user.userId : "0"));
  }, [dispatch, user, shouldUpdate]);

  const { carts } = useAppSelector((state) => state.cart);

  return (
    <section className={classes.cartPage}>
      {carts.length !== 0 ? (
        <CartList items={carts} handlerDelete={handlerDelete} />
      ) : (
        <>В корзине пусто :(</>
      )}
    </section>
  );
};
