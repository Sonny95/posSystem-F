import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";

interface Item {
  orderNumber: number;
  item: string;
  qty: number;
}

interface idProps {
  admin: any;
  id: number;
}

function AdminOrder() {
  const updateId = useSelector((state: idProps) => {
    console.log(state.admin.adminId, "state.admin.adminId");
    return state.admin.adminId;
  });

  const [itemsData, setItemsData] = useState([]);
  const [updateStatus, setUpdateStatus] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/adminOrderDetail/${updateId}`)
      .then((response) => {
        setItemsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [updateId]);

  const submitStatus = () => {
    const requestData = {
      status: "Completed",
    };
    console.log(requestData, "requestData");
    axios
      .post(`http://localhost:8080/updateStatus/${updateStatus}`, requestData)
      .then((updateResponse) => {
        console.log(updateResponse.status, "updateResponse.status");
        if (updateResponse.status === 200) {
          alert("updated");
        }
      })
      .catch((statusError) => {
        console.log(statusError);
      });
  };

  return (
    <div className="w-[309px] h-full p-[10px] mr-[16px] bg-white">
      <div className="w-[289px] h-[24px] flex mt-[24px] text-xl">
        <p className="font-semibold mr-3">Order</p>
        <p>#{updateId}</p>
      </div>
      <div className="w-[239px] flex justify-between my-[20px]">
        <p>Item</p>
        <p>Qty</p>
      </div>

      {/* card */}

      <div className=" w-[289px] h-[559px] mt-[20px] overflow-y-visible overflow-x-hidden">
        {itemsData?.map((value: Item) => (
          <div className="w-[289px] mb-[10px] flex justify-between">
            <div className="w-[239px] justify-between flex">
              <div className="w-[184px]">
                <p>{value?.item}</p>
              </div>
              <div className="w-[30px] flex justify-center items-center">
                <p>{value?.qty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* completeButton */}
      <div className=" w-[289px] h-[48px] bottom-0">
        <button
          onClick={submitStatus}
          className="w-full h-full bg-gray-100 z-10 flex justify-between items-center rounded-lg px-6 hover:bg-[#003049] hover:text-white text-gray-400"
        >
          <p>Complete</p>
          <p>{">"} </p>
        </button>
      </div>
    </div>
  );
}

export default AdminOrder;
