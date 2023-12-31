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

interface RootState {
  cart: {
    cartItem: any[];
    cartTotalPrice: number;
  };
}

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.cartItem);

  const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/foods")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //cartitems 값이 변경될때마다 동ㅇ작
  useEffect(() => {
    dispatch(updateTotals({ cartItems, cartTotalPrice }));
  }, [cartItems]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <Categories categories={categories} />
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
