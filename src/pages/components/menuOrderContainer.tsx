import React from "react";
import Link from "next/link";
import Cart from "./cart";

interface item {
  id: number;
  name: string;
  price: number;
  src: any;
  cartQuantity: number;
}

type clicekdFunction = (event: any, value: any) => void;

function MenuOrderContainer({ list, clicked }: { list: item[]; clicked: clicekdFunction }) {
  console.log(list, "list of list");
  return (
    <div className="w-[309px] h-full bg-white px-[10px] ">
      {/* delete button */}
      <div className="w-[289px] h-[24px] flex mt-[34px] bg-white text-lg mb-[20px] ">
        <p className="font-medium mr-3">New</p>
        <p> Order</p>
        {/* TODO how to take a emoji */}

        <button
          onClick={() => {
            clicked("initCart", list);
          }}
          className="mr-2 h-[20px] ml-auto cursor-pointer"
        >
          X
        </button>
      </div>

      {/* will delete below codes after redux */}

      <div className=" w-[289px] h-[646px] bg-gray-100 my-5 overflow-y-scroll">
        <Cart list={list} clicked={clicked} />
        <div className="h-[10px] w-full bg-gray-100"></div>

        {/* 페이벗튼 */}
        <Link href="/checkout">
          <button className="w-[289px] h-[48px] bg-[#003049] z-10 fixed bottom-16 text-white flex justify-center items-center rounded-lg">
            <p>$</p>
            <p>Pay</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MenuOrderContainer;
