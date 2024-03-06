import React, { useEffect, useState } from "react";
import Categories from "./components/general/categories";
import Menu from "./components/user/menu";
import MenuOrderContainer from "./components/user/menuOrderContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreasmentQuantity,
  removeItem,
  initCart,
  updateTotals,
} from "../modules/cartSlice";
import axios from "axios";
import { useQuery } from "react-query";
import AdminButton from "./components/general/adminButton";

interface RootState {
  cart: {
    cartItem: any[];
    cartTotalPrice: number;
  };
}

export default function Home() {
  const [foods, setFoods] = useState([]);

  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.cartItem);

  const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);

  useEffect(() => {
    axios
      .get("/api/foods")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //active when cartitems status is changed
  useEffect(() => {
    dispatch(updateTotals({ cartItems, cartTotalPrice }));
  }, [cartItems]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <Categories />
        <Menu
          data={foods}
          clicked={(value: any) => {
            dispatch(addToCart(value));
          }}
        />
        <MenuOrderContainer
          cartItems={cartItems}
          cartTotalPrice={cartTotalPrice}
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
