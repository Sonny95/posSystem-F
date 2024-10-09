import React from "react";
import Link from "next/link";
import Cart from "../general/cart";
import { useSelector } from "react-redux";
import PayButton from "./payButton";

interface item {
  id: number;
  name: string;
  price: number;
  src: any;
  cartQuantity: number;
}

interface MenuOrderContainerProps {
  cartItems: item[];
  cartTotalPrice: number;
  clicked: clicekdFunction;
}

type clicekdFunction = (event: any, value: any) => void;

function MenuOrderContainer({ cartItems, cartTotalPrice, clicked }: MenuOrderContainerProps) {
  console.log(cartTotalPrice, "totalpriceindex");
  return (
    <div className="w-[309px] h-full bg-white px-[10px] ">
      {/* delete button */}
      <div className="w-[289px] h-[24px] flex mt-[34px] bg-white text-lg mb-[20px] ">
        <p className="font-medium mr-2">New</p>
        <p> Order</p>

        <button
          onClick={() => {
            clicked("initCart", cartItems);
          }}
          className="mr-2 h-[20px] ml-auto cursor-pointer"
        >
          X
        </button>
      </div>

      <div className=" w-[289px] h-[607px] mt-[20px] overflow-y-visible overflow-x-hidden">
        <Cart cartItems={cartItems} clicked={clicked} />
      </div>
      {/* Payment button */}
      <Link href="/checkout">
        <div className=" w-[289px] h-[48px]">
          <PayButton cartTotalPrice={cartTotalPrice} onClick={() => {}} />
        </div>
      </Link>
    </div>
  );
}

export default MenuOrderContainer;
