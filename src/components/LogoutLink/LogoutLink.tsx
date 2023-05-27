import { FC } from "react";
import classes from "./LogoutLink.module.scss";
import { Link } from "react-router-dom";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";

interface LogoutLinkProps {}

export const LogoutLink: FC<LogoutLinkProps> = () => {
  return (
    <Link to="/">
      <LogoutOutlined rev={undefined} style={{ fontSize: "22px" }} />
    </Link>
  );
};
