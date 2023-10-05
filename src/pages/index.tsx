import React from "react";
import Categories from "./components/categories";
import Menu from "./components/menu";
import MenuOrderContainer from "./components/menuOrderContainer";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <Categories />
        <Menu />
        <MenuOrderContainer />
      </div>
    </div>
  );
}
