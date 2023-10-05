import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

function Menu() {
  // const dispatch = useDispatch();

  const burgerName = [
    { id: 1, name: "Quater Pounder With Cheese", price: 3.99 },
    { id: 2, name: "Double Quater Pounder With Cheese", price: 4.79 },
    { id: 3, name: "Quater Pounder With Cheese Deluxe", price: 4.29 },
    { id: 4, name: "Bic Mac", price: 3.99 },
    { id: 5, name: "McDouble", price: 1.99 },
    { id: 6, name: "Quater Pounder With Cheese Bacon", price: 4.99 },
    { id: 7, name: "Classic Angus", price: 4.99 },
    { id: 8, name: "Bacon Barbeque Angus", price: 5.99 },
    { id: 9, name: "Spicy Chicken", price: 5.99 },
  ];

  return (
    <div className="w-[545px] h-full mx-6 overflow-y-scroll">
      {/* search bar */}
      <div className="h-[40px] w-[545px] mb-6 bg--200 my-6 ">
        <input placeholder="Search" className="w-[525px] h-full rounded-lg p-5 mx-[10px]"></input>{" "}
      </div>

      <div className="w-[545px] h-[644px] flex flex-wrap">
        {burgerName.map((value) => (
          <div
            // onClick={() => {
            //   dispatch(addToCart(value));
            // }}
            className="w-[161px] h-[250px] bg-white m-[10px] cursor-pointer	"
            key={value.id}
          >
            <div className="w-[122px] h-[122px] my-0 mx-auto mt-4 flex items-center justify-center">
              <img src="/burger.png" className="w-[105.92px] h-[90px]" />
            </div>
            <p className="text-center my-2">${value.price}</p>
            <p className="font-bold text-center text-m">{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
