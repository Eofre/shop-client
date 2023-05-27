import { FC } from "react";
import { Header } from "./components/Header";
import { AppRouter } from "./components/AppRouter";

const App: FC = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
