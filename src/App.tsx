import { FC, useEffect } from "react";
import { Header } from "./components/Header";
import { AppRouter } from "./components/AppRouter";
import { useAppSelector } from "./hooks/useAppSelector";
import { LoginPage } from "./pages/LoginPage";

const App: FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <AppRouter />
      {/* {user ? (
        <>
          <Header />
          <AppRouter />
        </>
      ) : (
        <LoginPage />
      )} */}
    </>
  );
};

export default App;
