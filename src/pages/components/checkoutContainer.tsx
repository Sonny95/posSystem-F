import React from "react";

function CheckoutContainer() {
  const PaymentList = [
    { id: 1, name: "Credit Card", src: "/creditCard.svg" },
    { id: 2, name: "Cash", src: "/cash.svg" },
    { id: 3, name: "Scanner", src: "/scanner.svg" },
  ];

  const CardPayment = [
    { id: 1, name: "MasteCard", src: "/masterCard.svg" },
    { id: 2, name: "visa", src: "/visa.svg" },
    { id: 3, name: "american", src: "/american.svg" },
    { id: 4, name: "discoverCard", src: "/discoverCard.svg" },
  ];
  return (
    <div className="w-[417px] h-full bg-white flex items-center justify-center">
      <div className="w-[377px] h-full">
        <div className="w-full h-[19px] mt-[34px]">
          <p className="font-medium text-center text-xl">Payment</p>
        </div>

        <div className="w-[377px] h-[90px] flex justify-between my-[30px]">
          {PaymentList.map((value) => (
            <div className="rounded-lg cursor-pointer ounded-lg w-[110px] h-[95px] bg-gray-400 flex  my-[20px] hover:bg-[#003049]">
              <div className="w-[112px] h-[90px] flex flex-col items-center justify-center">
                <img src={value.src} className="w-[30px] h-[30px] " />
                <p className="text-white">{value.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[377px] h-[64px] flex justify-between ">
          {CardPayment.map((value) => (
            <div className="rounded-lg cursor-pointer ounded-lg w-[86px] h-[64px] bg-white flex  my-[20px] hover:bg-[#003049]">
              <div className="w-[86px] h-[64px] flex flex-col items-center justify-center">
                <img src={value.src} className="w-full " />
              </div>
            </div>
          ))}
        </div>

        <div className=" w-[377px] h-[267px] my-[30px]">
          <p>Cardholder Name</p>
          <input placeholder="Cardholder Name" className="w-full h-[50px] bg-gray-200"></input>
          <p>Cardholder Number</p>
          <input placeholder="Cardholder Number" className="w-full h-[50px] bg-gray-200"></input>
          <p>Expiration Date</p>
          <input placeholder="00/0000" className="w-[173.5px] h-[50px] bg-gray-200"></input>
          <p>CVV</p>
          <input placeholder="CVV" className="w-[173.5px] h-[50px] bg-gray-200"></input>
        </div>

        <button className="w-[377px] h-[48px] bg-[#003049] z-10 fixed bottom-16 text-white flex justify-center items-center rounded-lg">
          <p>$</p>
          <p>Pay</p>
        </button>
      </div>
    </div>
  );
}

export default CheckoutContainer;
