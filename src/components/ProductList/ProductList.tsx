import { FC } from "react";
import classes from "./ProductList.module.scss";
import { IProduct } from "../../types/types";
import { ProductItem } from "../ProductItem";
import { Link } from "react-router-dom";

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ul className={classes.productList}>
      {products.map((product) => (
        <Link key={product.id} to={`products/${product.id}`}>
          <ProductItem product={product} key={product.id} />
        </Link>
      ))}
    </ul>
  );
};
