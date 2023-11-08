import React, { useEffect, useState } from "react";
import CheckoutContainer from "./components/checkoutContainer";
import Categories from "./components/categories";
import CheckoutMenuOrderContainer from "./components/checkoutMenuOrderContainer";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminCategories from "./components/adminCategories";
import AdminMiddleComponent from "./components/adminMiddleComponent";

interface RootState {
  cart: {
    cartItem: any[];
    cartTotalPrice: number;
  };
}

type clicekdFunction = (event: any, value: any) => void;

function PendingPage() {
  const [categories, setCategories] = useState([]);

  const cartItems = useSelector((state: RootState) => state.cart.cartItem);
  const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);

  useEffect(() => {
    axios
      .get("http://localhost:8080/adminCategories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 ">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <AdminCategories categories={categories} />
        <AdminMiddleComponent />
      </div>
    </div>
  );
}

export default PendingPage;
