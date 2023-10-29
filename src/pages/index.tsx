import React, { useEffect, useState } from "react";
import Categories from "./components/categories";
import Menu from "./components/menu";
import MenuOrderContainer from "./components/menuOrderContainer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreasmentQuantity, removeItem, initCart } from "../modules/cartSlice";
import axios from "axios";

interface RootState {
  cart: {
    cartItem: any[];
  };
}

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => {
    console.log(state, "cartItems");
    return state.cart.cartItem;
  });

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

  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <Categories list={categories} />
        <Menu
          list={foods}
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
