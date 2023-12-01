import React, { useEffect, useState } from "react";
import CheckoutContainer from "./components/checkout/checkoutContainer";
import Categories from "./components/admin/adminCategories";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminCategories from "./components/admin/adminCategories";
import AdminMiddleComponent from "./components/admin/adminMiddleComponent";
import AdminOrder from "./components/admin/adminOrder";

interface RootState {
  cart: {
    cartItem: any[];
    cartTotalPrice: number;
  };
}

interface result {
  id: number;
  orderTime: any;
  totalPrice: any;
  payment: string;
  totalQty: number;
}

function PendingPage() {
  const [categories, setCategories] = useState([]);
  const [order, setOrder] = useState([]);
  const [item, setItem] = useState([]);
  const [onClickId, setOnClickId] = useState();

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

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/adminOrder?page=${currentPage}`)
  //     .then((response) => {
  //       setOrder(response.data.data.result);
  //       console.log(response.data.data.result, "setOrder");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [currentPage]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/adminOrderDetail")
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleCardClick = (clickedId: any) => {
    console.log("id", clickedId);
    setOnClickId(clickedId);
  };

  return (
    <div className="w-full flex items-center justify-center bg-gray-100 ">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <AdminCategories categories={categories} />
        <AdminMiddleComponent onClickCard={handleCardClick} />
        <AdminOrder onClickCard={onClickId} />
      </div>
    </div>
  );
}

export default PendingPage;
