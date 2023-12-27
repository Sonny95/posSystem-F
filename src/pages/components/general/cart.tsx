import React from "react";

interface item {
  id: number;
  name: string;
  price: number;
  src: any;
  cartQuantity: number;
}

type clicekdFunction = (event: any, value: any) => void;

function Cart({ list, clicked }: { list: item[]; clicked: clicekdFunction }) {
  return (
    <div>
      {list?.map((value) => (
        <div key={value.id} className="w-full flex  bg-white mb-[10px]">
          <div className="w-2/12 h-[72px] flex justify-center items-center ">
            <img src="/burger.png" alt={value.src} className="w-[62.5px] h-[53.1px] " />
          </div>
          <div className="w-10/12 h-[90px] flex my-[20px] px-[10px] ">
            <div className="w-full h-[90px] text-[13px] ">
              <p>{value.name}</p>
              <div className="w-[127px] h-[30px] flex mt-[20px] ">
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
    </div>
  );
}

export default Cart;
