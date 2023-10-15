import React from "react";
import Categories from "./components/categories";
import Menu from "./components/menu";
import MenuOrderContainer from "./components/menuOrderContainer";
import { useDispatch } from "react-redux";
import { addToCart, decreasmentQuantity, removeItem, initCart } from "../modules/cartSlice";
import { useSelector } from "react-redux";

interface RootState {
  cart: {
    cartItem: any[];
  };
}

export default function Home() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => {
    console.log(state, "cartItems");
    return state.cart.cartItem;
  });

  const categoriesName = [
    { id: 1, name: "Meals", src: "/categories.png" },
    { id: 2, name: "Burgers", src: "/categories.png" },
    { id: 3, name: "Sides", src: "/categories3.png" },
    { id: 4, name: "Drink", src: "/categories4.png" },
    { id: 5, name: "Meals", src: "/categories.png" },
  ];

  const menuList = [
    { id: 1, name: "Quater Pounder With Cheese", price: 3.99 },
    { id: 2, name: "Double Quater Pounder With Cheese", price: 4.79 },
    { id: 3, name: "Quater Pounder With Cheese Deluxe", price: 4.29 },
    { id: 4, name: "Bic Mac", price: 3.99 },
    { id: 5, name: "McDouble", price: 1.99 },
    { id: 6, name: "Quater Pounder With Cheese Bacon", price: 4.99 },
    { id: 7, name: "Classic Angus", price: 4.99 },
    { id: 8, name: "Bacon Barbeque Angus", price: 5.99 },
    { id: 9, name: "Spicy Chicken", price: 5.99 },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <Categories list={categoriesName} />
        <Menu
          list={menuList}
          clicked={(value: any) => {
            dispatch(addToCart(value));
          }}
        />
        <MenuOrderContainer
          list={cartItems}
          clicked={(event, value) => {
            if (event === "-") {
              dispatch(decreasmentQuantity(value));
            } else if (event === "+") {
              dispatch(addToCart(value));
            } else if (event === "removeItem") {
              dispatch(removeItem(value));
            } else if (event === "initCart") {
              dispatch(initCart(value));
            }
          }}
        />
      </div>
    </div>
  );
}
