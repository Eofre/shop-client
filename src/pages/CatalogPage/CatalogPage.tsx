import { FC, useEffect } from "react";
import classes from "./CatalogPage.module.scss";
import { fetchProducts } from "../../store/slices/products";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ProductList } from "../../components/ProductList";
import { Container } from "../../components/Container";
import { SearchBar } from "../../components/SearchBar";
import { redirect } from "react-router-dom";

interface CatalogPageProps {}

export const CatalogPage: FC<CatalogPageProps> = () => {
  const { products, loading } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const delay = 2000;
    // const timer = setTimeout(() => {
    //   dispatch(fetchProducts());
    // }, delay);

    // return () => clearTimeout(timer);
    dispatch(fetchProducts());
  }, []);

  return (
    <section className={classes.catalogPage}>
      <div className={classes.wrapper}>
        <div className={classes.searchBar}>
          <SearchBar />
        </div>
        <ProductList products={products} />
      </div>
    </section>
  );
};
