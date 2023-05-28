import { FC } from "react";
import classes from "./ProductItem.module.scss";
import { IProduct } from "../../types/types";

interface ProductItemProps {
  product: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={classes.productItem}>
      <img src={product.image} alt="фото товара" />
      <h5>{product.price} ₽</h5>
      <p
        className={classes.category}
      >{`/ ${product.productCategory.name} /`}</p>
      <p className={classes.name}>{product.name}</p>
    </div>
  );
};
