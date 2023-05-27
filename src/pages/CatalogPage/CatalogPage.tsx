import { FC } from "react";
import classes from "./CatalogPage.module.scss";

interface CatalogPageProps {}

export const CatalogPage: FC<CatalogPageProps> = () => {
  return <section className={classes.catalogPage}>Каталог</section>;
};
