import React, { useEffect, useState } from "react";
import CheckoutContainer from "./components/checkoutContainer";
import Categories from "./components/categories";
import CheckoutMenuOrderContainer from "./components/checkoutMenuOrderContainer";
import { useSelector } from "react-redux";
import axios from "axios";

// interface item {
//   id: number;
//   name: string;
//   price: number;
//   src: any;
//   cartQuantity: number;
// }

interface RootState {
  cart: {
    cartItem: any[];
    cartTotalPrice: number;
  };
}

type clicekdFunction = (event: any, value: any) => void;

function checkout() {
  const [categories, setCategories] = useState([]);

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
  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <Categories categories={categories} />
        <CheckoutMenuOrderContainer data={{ cartItems, cartTotalPrice }} />
        <CheckoutContainer data={{ cartItems, cartTotalPrice }} />
      </div>
    </div>
  );
}

export default checkout;
