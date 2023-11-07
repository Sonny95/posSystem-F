import React from "react";
import PayButton from "./payButton";
import axios from "axios";

interface item {
  id: number;
  name: string;
  price: number;
  src: any;
  cartQuantity: number;
}

function CheckoutContainer({ data }: { data: { cartItems: item[]; cartTotalPrice: number } }) {
  const { cartItems, cartTotalPrice } = data;
  console.log(cartItems[0].cartQuantity, "cartItems");
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

  const onSubmit = () => {
    const currentTime = new Date().toISOString();
    const requestData = {
      orderTime: currentTime,
      totalPrice: cartTotalPrice,
      payment: "Credit Card",
      item: cartItems,
      qty: cartItems,
    };

    axios
      .post("http://localhost:8080/order", requestData)
      .then((orderResponse) => {
        console.log(orderResponse.status, "orderResponse.status");
        if (orderResponse.status === 200) {
          alert("Ordered successfully");
        }
      })
      .catch((orderError) => {
        console.log(orderError);
      });
  };

  // const onSubmit = () => {
  //   const currentTime = new Date().toISOString();
  //   const requestData = {
  //     orderTime: currentTime,
  //     totalPrice: cartTotalPrice,
  //     payment: "Credit Card",
  //     item: cartItems[0].name,
  //     qty: cartItems[0].cartQuantity,
  //   };

  //   axios
  //     .post("http://localhost:8080/order", requestData)
  //     .then((orderResponse) => {
  //       console.log(orderResponse.status, "orderResponse.status");
  //       if (orderResponse.status === 200) {
  //         console.log("asdf");
  //         // const orderID = orderResponse.data.id;
  //         // console.log(orderID, "orderID");
  //         const requestItemsData = {
  //           // orderNumber: orderID,
  //           item: cartItems[0].name,
  //           qty: cartItems[0].cartQuantity,
  //         };
  //         console.log(requestItemsData, "requestItemsData");
  //         axios
  //           .post("http://localhost:8080/orderItems", requestItemsData)
  //           .then((orderItemsResponse) => {
  //             if (orderItemsResponse.status === 200) {
  //               alert("Ordered successfully");
  //             }
  //           })
  //           .catch((orderItemsError) => {
  //             console.log(orderItemsError);
  //           });
  //       }
  //     })
  //     .catch((orderError) => {
  //       console.log(orderError);
  //     });
  // };

  return (
    <div className="w-[448px] h-[744px] bg-white flex items-center justify-center ">
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

        <div className="w-[377px] h-[521px]">
          <div className="w-full h-[64px] flex justify-between ">
            {CardPayment.map((value) => (
              <div className="rounded-lg cursor-pointer ounded-lg w-[86px] h-[64px] bg-white flex  my-[20px] hover:bg-[#003049]">
                <div className="w-[86px] h-[64px] flex flex-col items-center justify-center">
                  <img src={value.src} className="w-full " />
                </div>
              </div>
            ))}
          </div>

          <div className=" w-full h-[267px] my-[30px] mb-20">
            <p>Cardholder Name</p>
            <input
              placeholder="Cardholder Name"
              className="w-full h-[50px] bg-gray-200 mb-[30px]"
            ></input>
            <p>Cardholder Number</p>
            <input
              placeholder="Cardholder Number"
              className="w-full h-[50px] bg-gray-200 mb-[30px]"
            ></input>
            <div className="flex w-full">
              <div className="mr-[20px]">
                <p>Expiration Date</p>
                <input placeholder="00/0000" className="w-[173.5px] h-[50px] bg-gray-200"></input>
              </div>
              <div>
                <p>CVV</p>
                <input placeholder="CVV" className="w-[173.5px] h-[50px] bg-gray-200"></input>
              </div>
            </div>
          </div>

          <div className="w-[377px] h-[43px]">
            <PayButton cartTotalPrice={cartTotalPrice} onClick={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutContainer;
