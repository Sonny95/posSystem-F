import React from "react";

function CheckoutMenuOrderContainer() {
  return (
    <div className="w-[417px] h-full bg-white mr-[22px] ml-[38px]">
      <div className="w-[397px] h-full  mx-[10px]">
        <div className="w-[397px] h-[24px] bg-white text-xl mt-[34px] mb-[20px] flex ">
          <p className="font-medium mr-3">Checkout</p>
          <button className="mr-2 h-[20px] ml-auto cursor-pointer">x</button>
        </div>

        <div className="w-[397px] h-[666px] bg-gray-100 my-5 overflow-y-scroll">
          <div className="w-[397px] h-[110px] flex  bg-white mb-[10px]">
            <div className="w-[72px] h-[72px] flex justify-center items-center">
              <img src="/burger.png" className="w-[62.5px] h-[53.1px] " />
            </div>
            <div className="w-[325px] h-[90px] flex my-[20px] px-[10px]">
              <div className="w-[252px] h-[90px] text-[13px]">
                <p>name</p>
                <div className="w-[127px] h-[30px] flex mt-[20px]">
                  <button className="w-[30px] h-[30px] bg-[#003049] rounded-full text-white mr-[30px]">
                    -
                  </button>
                  <p className="mt-1.5">1</p>
                  <button className="w-[30px] h-[30px] bg-[#003049] rounded-full text-white ml-[30px]">
                    +
                  </button>
                </div>
              </div>
              <div className="w-[43px] h-[90px] ml-[10px] flex flex-col justify-between items-end text-[14px]">
                <p>price</p>
                <div className="cursor-pointer">X</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutMenuOrderContainer;
