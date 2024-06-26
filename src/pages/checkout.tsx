import React, { useEffect, useState } from "react";
import CheckoutContainer from "./components/checkout/checkoutContainer";
import Categories from "./components/general/categories";
import CheckoutMenuOrderContainer from "./components/checkout/checkoutMenuOrderContainer";
import { useSelector } from "react-redux";
import axios from "axios";

interface RootState {
  cart: {
    cartItem: any[];
    cartQuantity: number;
    cartTotalPrice: number;
  };
}

type clicekdFunction = (event: any, value: any) => void;

function checkout() {
  const [categories, setCategories] = useState([]);

  const cartItems = useSelector((state: RootState) => state.cart.cartItem);
  const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity);
  const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);
  console.log(cartTotalPrice, "cartTotalCheckout");

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <Categories />
        <CheckoutMenuOrderContainer cartItems={cartItems} />
        <CheckoutContainer data={{ cartItems, cartTotalPrice, cartQuantity }} />
      </div>
    </div>
  );
}

export default checkout;
