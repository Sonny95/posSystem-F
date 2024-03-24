import React, { useEffect, useState } from "react";
import CheckoutContainer from "./components/checkout/checkoutContainer";
import Categories from "./components/admin/adminCategories";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminCategories from "./components/admin/adminCategories";
import AdminMiddleComponent from "./components/admin/adminMiddleComponent";
import AdminRightComponent from "./components/admin/adminRightComponent";
import { GetServerSideProps } from "next";
import router from "next/router";

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
  const [selectedCategory, setSelectedCategory] = useState("Transaction");

  useEffect(() => {
    axios
      .get("/api/adminCategories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCategoryClick = (category: any) => {
    if (category.name === "Logout") {
      router.push("/");
    }
    if (category.name === "Settings") {
      alert("will come back soon!");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <AdminCategories categories={categories} onCategoryClick={handleCategoryClick} />
        <AdminMiddleComponent selectedCategory={selectedCategory} />
        <AdminRightComponent selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default PendingPage;
