import { FC } from "react";
import classes from "./CartItem.module.scss";
import { IShoppingCart } from "../../types/types";
import { MyButton } from "../UI/MyButton";
import { DeleteOutlined } from "@ant-design/icons";

interface CartItemProps {
  item: IShoppingCart;
  handlerDelete: (productId: string | number) => void;
}

export const CartItem: FC<CartItemProps> = ({ item, handlerDelete }) => {
  // const { count, product } = item;
  // const { name, image, price } = product;

  return (
    <li className={classes.cartItem}>
      <div className={classes.top}>
        <img
          className={classes.img}
          src={item.product?.image}
          alt="фото товара"
        />
        <div className={classes.info}>
          <h3>{item.product?.price} ₽</h3>
          <p className={classes.name}>{item.product?.name}</p>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.count}>
          <MyButton>
            <h3>-</h3>
          </MyButton>
          <span>{item.count}</span>
          <MyButton>
            <h3>+</h3>
          </MyButton>
        </div>
        <button onClick={() => handlerDelete(item.product.id)}>
          <DeleteOutlined rev={undefined} style={{ fontSize: "22px" }} />
        </button>
      </div>
    </li>
  );
};
