import { FC } from "react";
import classes from "./LogoLink.module.scss";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

interface LogoLinkProps {}

export const LogoLink: FC<LogoLinkProps> = () => {
  return (
    <Link to="/">
      <HomeOutlined rev={undefined} style={{ fontSize: "22px" }} />
    </Link>
  );
};
