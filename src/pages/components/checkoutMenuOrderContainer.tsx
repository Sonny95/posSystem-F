import React from "react";

function CheckoutMenuOrderContainer() {
  return (
    <div className="w-[417px] h-full bg-blue-100 mr-[22px] ml-[38px]">
      <div className="w-[397px] h-full bg-blue-200 mx-[10px]">
        <div className="w-[397px] h-[24px] bg-white text-xl mt-[34px] flex ">
          <p className="font-medium mr-3">Checkout</p>
          <img
            src="http://www.w3.org/2000/svg"
            className="w-[20px] h-[20px] ml-auto cursor-pointer"
          />
        </div>

        <div className="w-[397px] h-full mt-[20px] overflow-y-scroll">
          <div className="w-full  flex  bg-white ">
            <div className="w-[72px] h-[72px] flex justify-center items-center">
              <img src="/burger.png" className="w-[62.5px] h-[53.1px] " />
            </div>
            <div className="w-[325px] h-[90px] flex my-[20px] px-[10px]">
              <div className="w-[144px] h-[90px] text-[13px]">
                <p>Quater Pounder With Cheese Deluxe</p>
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
                <p>$4.29</p>
                <div>X</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutMenuOrderContainer;
