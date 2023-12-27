import React from "react";
import Cart from "../general/cart";

interface item {
  id: number;
  name: string;
  price: number;
  src: any;
  cartQuantity: number;
}

function CheckoutMenuOrderContainer({
  data = { cartItems: [], cartTotalPrice: 0 },
}: {
  data: { cartItems: item[]; cartTotalPrice: number };
}) {
  const { cartItems, cartTotalPrice } = data;

  return (
    <div className="w-[417px] h-full bg-white mr-[22px] ml-[38px]">
      <div className="w-[397px] h-full  mx-[10px]">
        <div className="w-[397px] h-[24px] bg-white text-xl mt-[34px] mb-[20px] flex ">
          <p className="font-medium mr-3">Checkout</p>
          <button className="mr-2 h-[20px] ml-auto cursor-pointer">x</button>
        </div>

        <div className="w-[397px] h-[666px] my-5 overflow-y-visible overflow-x-hidden">
          <Cart
            list={cartItems}
            clicked={function (event: any, value: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutMenuOrderContainer;
