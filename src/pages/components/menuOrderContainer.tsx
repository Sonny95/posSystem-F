import React from "react";
import { useSelector } from "react-redux";

interface item {
  id: number;
  name: string;
  price: number;
}

function MenuOrderContainer() {
  // const item = useSelector((state) => {
  // return console.log(state)
  // state.cartItem});
  return (
    <div className="w-[289px] h-full bg-gray-100 px-[10px]">
      {/* delete button */}
      <div className="w-[269px] h-[24px] flex mt-[34px] bg-white text-xl mb-[20px] ">
        <p className="font-medium mr-3">New</p>
        <p> Order</p>
        {/* TODO how to take a emoji */}
        <img
          src="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px] ml-auto cursor-pointer"
        />
      </div>

      <div className="w-[269px] h-[646px] my-5 ">
        {/* {item.map((value: any) => ( */}
        <div className="w-[269px]  flex  bg-white ">
          <div className="w-[72px] h-[72px] flex justify-center items-center">
            <img src="/burger.png" className="w-[62.5px] h-[53.1px] " />
          </div>
          <div className="w-[197px] h-[90px] flex my-[20px] px-[10px]">
            <div className="w-[144px] h-[90px] text-[13px]">
              <p>Quater Pounder With Cheese Deluxe</p>
              <div className="w-[127px] h-[30px] flex mt-[20px]">
                <button className="w-[30px] h-[30px] bg-black rounded-full text-white mr-[30px]">
                  -
                </button>
                <p className="mt-1.5">1</p>
                <button className="w-[30px] h-[30px] bg-black rounded-full text-white ml-[30px]">
                  +
                </button>
              </div>
            </div>
            <div className="w-[43px] h-[90px] ml-[10px] flex flex-col justify-between items-end text-[14px]">
              <p>$4.29</p>
              <div>X</div>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default MenuOrderContainer;
