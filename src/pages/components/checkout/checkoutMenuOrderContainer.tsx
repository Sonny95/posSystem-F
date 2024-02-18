import React from "react";
import Cart from "../general/cart";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreasmentQuantity,
  removeItem,
  initCart,
  updateTotals,
} from "../../../modules/cartSlice";

interface item {
  id: number;
  name: string;
  price: number;
  src: any;
  cartQuantity: number;
}

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
}

type clicekdFunction = (event: any, value: any) => void;

function CheckoutMenuOrderContainer({
  cartItems,
  cartTotalPrice,
}: MenuOrderContainerProps): JSX.Element {
  const dispatch = useDispatch();

  const clicked: clicekdFunction = (event, value) => {
    if (event === "-") {
      dispatch(decreasmentQuantity(value));
    } else if (event === "+") {
      dispatch(addToCart(value));
    } else if (event === "removeItem") {
      dispatch(removeItem(value));
    } else if (event === "initCart") {
      dispatch(initCart(value));
    }
  };

  return (
    <div className="w-[417px] h-full bg-white mr-[22px] ml-[38px]">
      <div className="w-[397px] h-full  mx-[10px]">
        <div className="w-[397px] h-[24px] bg-white text-xl mt-[34px] mb-[20px] flex ">
          <p className="font-medium mr-3">Checkout</p>
          <button
            onClick={() => {
              clicked("initCart", cartItems);
            }}
            className="mr-2 h-[20px] ml-auto cursor-pointer"
          >
            x
          </button>
        </div>

        <div className="w-[397px] h-[666px] my-5 overflow-y-visible overflow-x-hidden">
          <Cart cartItems={cartItems} clicked={clicked} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutMenuOrderContainer;
