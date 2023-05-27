import { FC, useEffect } from "react";
import { Header } from "./components/Header";
import { AppRouter } from "./components/AppRouter";
import { LoginPage } from "./pages/LoginPage";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { fetchProducts } from "./store/slices/products";
import { useAppSelector } from "./hooks/useAppSelector";

const App: FC = () => {
  const { products, loading } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const delay = 2000;
    const timer = setTimeout(() => {
      dispatch(fetchProducts());
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <p>Загрузка</p> : products.map((item) => <p>{item.name}</p>)}
      {/* <Header />
      <AppRouter /> */}
      <LoginPage />
    </>
  );
};

export default App;
