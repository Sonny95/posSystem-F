import React, { useEffect, useState } from "react";
import CheckoutContainer from "./components/checkoutContainer";
import Categories from "./components/categories";
import CheckoutMenuOrderContainer from "./components/checkoutMenuOrderContainer";
import { useSelector } from "react-redux";
import axios from "axios";

interface item {
  id: number;
  name: string;
  price: number;
  src: any;
  cartQuantity: number;
}

type clicekdFunction = (event: any, value: any) => void;

function checkout({ list, clicked }: { list: item[]; clicked: clicekdFunction }) {
  console.log(list, "list of list");
  const [categories, setCategories] = useState([]);

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
        <Categories list={categories} />
        <CheckoutMenuOrderContainer />
        <CheckoutContainer />
      </div>
    </div>
  );
}

export default checkout;
