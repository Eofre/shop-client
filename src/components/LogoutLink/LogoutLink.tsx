import { FC } from "react";
import classes from "./LogoutLink.module.scss";
import { Link } from "react-router-dom";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchLogoutUser } from "../../store/slices/auth";

interface LogoutLinkProps {}

export const LogoutLink: FC<LogoutLinkProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(fetchLogoutUser());
  };
  return (
    <Link to="/" onClick={handleLogout}>
      <LogoutOutlined rev={undefined} style={{ fontSize: "22px" }} />
    </Link>
  );
};
