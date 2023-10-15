import React from "react";
import Link from "next/link";

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

      <div className="w-[289px] h-[646px] bg-gray-100 my-5 overflow-y-scroll">
        {list?.map((value) => (
          <div className="w-[289px]  flex  bg-white mb-[10px]">
            <div className="w-[72px] h-[72px] flex justify-center items-center">
              <img src="/burger.png" alt={value.src} className="w-[62.5px] h-[53.1px] " />
            </div>
            <div className="w-[197px] h-[90px] flex my-[20px] px-[10px]">
              <div className="w-[144px] h-[90px] text-[13px]">
                <p>{value.name}</p>
                <div className="w-[127px] h-[30px] flex mt-[20px]">
                  <button
                    onClick={() => clicked("-", value)}
                    className="w-[30px] h-[30px] bg-[#003049] rounded-full text-white mr-[30px]"
                  >
                    -
                  </button>
                  <p className="mt-1.5">{value.cartQuantity}</p>
                  <button
                    onClick={() => clicked("+", value)}
                    className="w-[30px] h-[30px] bg-[#003049] rounded-full text-white ml-[30px]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-[43px] h-[90px] ml-[10px] flex flex-col justify-between items-end text-[14px]">
                <p>{value.price}</p>
                <div onClick={() => clicked("removeItem", value)} className="cursor-pointer">
                  X
                </div>
              </div>
            </div>
          </div>
        ))}
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
