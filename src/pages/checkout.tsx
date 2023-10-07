import React from "react";
import Categories from "./components/categories";
import CheckoutMenuOrderContainer from "./components/checkoutMenuOrderContainer";

function checkout() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <Categories />
        <CheckoutMenuOrderContainer />
      </div>
    </div>
  );
}

export default checkout;
