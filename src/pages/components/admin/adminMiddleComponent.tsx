import React, { useEffect, useState } from "react";
import TimeComponent from "../general/timeComponent";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface itemProps {
  id: number;
  orderTime: any;
  totalPrice: any;
  payment: string;
  totalQty: number;
}

interface AdminMiddleComponentProps {
  orderData: itemProps[];
  currentPage: number;
}

function AdminMiddleComponent({ orderData, currentPage }: AdminMiddleComponentProps) {
  return (
    <div>
      <div className="w-[509px] h-[95%] mx-[22px] overflow-y-visible overflow-x-hidden bg-blue-100">
        <TimeComponent />
        {/* menu button */}
        <div className="my-[30px] flex ">
          <div className="w-[66px] h-[19px] cursor-pointer mr-[30px]">Pending</div>
          <div className="w-[66px] h-[19px] cursor-pointer">Completed</div>
        </div>

        {/* card */}
        {orderData?.map((value) => (
          <div className="w-full h-[98px] bg-white p-[10px] ">
            <div className="w-full flex justify-between mb-[20px]">
              <p className="">orderNumber #{value?.id}</p>
              <p>{`${new Date(value?.orderTime).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}, ${new Date(value?.orderTime).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}`}</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Number of items {value?.totalQty}</p>
              <div className="flex">
                <p className="mr-[20px]">${value?.totalPrice}</p>
                <div className="rounded-xl bg-green-500 w-[67px] h-[24px] flex justify-center alignItms-center ">
                  Paid
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* pagenation */}
    </div>
  );
}

export default AdminMiddleComponent;
