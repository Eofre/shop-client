import { FC } from "react";
import classes from "./CartLink.module.scss";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface CartLinkProps {}

export const CartLink: FC<CartLinkProps> = () => {
  return (
    <Link to="/cart">
      <ShoppingCartOutlined rev={undefined} style={{ fontSize: "25px" }} />
    </Link>
  );
};
