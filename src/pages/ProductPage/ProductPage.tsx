import { FC, useEffect, useState } from "react";
import classes from "./ProductPage.module.scss";
import { Container } from "../../components/Container";
import { useNavigate, useParams } from "react-router";
import axios from "../../api/axiosInstance";
import { IAddToCartDto, IProduct } from "../../types/types";
import { MyButton } from "../../components/UI/MyButton";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { addToCart } from "../../store/slices/cart";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useCheckCartItem from "../../hooks/useCheckCartItem";
import { findCartItem } from "../../store/slices/cartItem";
import { useAppSelector } from "../../hooks/useAppSelector";

interface ProductPageProps {}

export const ProductPage: FC<ProductPageProps> = () => {
  const user = useCurrentUser();
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (user) {
    const { userId } = user;
    const productId = String(id);

    useEffect(() => {
      dispatch(findCartItem({ userId, productId }));
    }, [dispatch]);
  }

  const { cartItem } = useAppSelector((state) => state.cartItem);
  const [isCartItem, setIsCartItem] = useState(Boolean(cartItem));

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

  const handleAddToCart = () => {
    if (product && user) {
      const addToCartDto: IAddToCartDto = {
        userId: user.userId,
        productId: product.id,
      };
      console.log(user);
      console.log(addToCartDto);
      dispatch(addToCart(addToCartDto));
      setIsCartItem(true);
    }
  };

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
              {/* <p>Кол-во в наличии: {product.quantityInStock}</p> */}
              {isCartItem ? (
                <>
                  <p>Товар уже добавлен в корзину.</p>
                  <MyButton onClick={() => navigate("/cart")}>
                    Перейти в корзину
                  </MyButton>
                </>
              ) : (
                <MyButton onClick={handleAddToCart}>
                  Добавить в корзину
                </MyButton>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>Товар не найден</>
      )}
    </section>
  );
};
