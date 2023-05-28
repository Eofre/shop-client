import { FC, useEffect, useState } from "react";
import classes from "./ProductPage.module.scss";
import { Container } from "../../components/Container";
import { useParams } from "react-router";
import axios from "../../api/axiosInstance";
import { IProduct } from "../../types/types";
import { MyButton } from "../../components/UI/MyButton";

interface ProductPageProps {}

export const ProductPage: FC<ProductPageProps> = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className={classes.productPage}>
      {product ? (
        <div className={classes.wrapper}>
          <h1 className={classes.name}>{product.name}</h1>
          <div className={classes.content}>
            <div className={classes.left}>
              <img
                className={classes.img}
                src={product.image}
                alt="фото товара"
              />
              <div className={classes.description}>
                <h3>Описание:</h3>
                <p>{product.description}</p>
              </div>
            </div>
            <div className={classes.right}>
              <h3 className={classes.price}>{product.price} ₽</h3>
              <p>Категория: {product.productCategory.name}</p>
              <p>Кол-во в наличии: {product.quantityInStock}</p>
              <MyButton>Добавить в корзину</MyButton>
            </div>
          </div>
        </div>
      ) : (
        <>Товар не найден</>
      )}
    </section>
  );
};
