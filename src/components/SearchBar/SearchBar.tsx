import { FC } from "react";
import classes from "./SearchBar.module.scss";
import { MyInput } from "../UI/MyInput";
import { SearchOutlined } from "@ant-design/icons";

interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = () => {
  return (
    <div className={classes.searchBar}>
      <SearchOutlined rev={undefined} />
      <MyInput type="search" placeholder="Я ищу..." />
    </div>
  );
};
