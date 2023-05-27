import { FC } from "react";
import classes from "./Navigation.module.scss";

import { navigationLinks } from "../../data/navigationLinks";
import { Link } from "react-router-dom";
import { CartLink } from "../CartLink";
import { LogoutLink } from "../LogoutLink";
import { LogoLink } from "../LogoLink";

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className={classes.navigation}>
      <LogoLink />
      <ul>
        {navigationLinks.map((item) => (
          <Link to={item.link} key={item.key}>
            {item.title}
          </Link>
        ))}
      </ul>
      <div className={classes.right}>
        <CartLink />
        <LogoutLink />
      </div>
    </nav>
  );
};
