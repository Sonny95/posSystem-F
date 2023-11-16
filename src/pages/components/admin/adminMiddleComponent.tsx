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
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: React.SetStateAction<number>) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

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
      <div className="flex items-center gap-10 text-xl justify-center ">
        <Button
          variant="text"
          className="flex items-center gap-4 hover:text-green-500 text-black"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 " />
        </Button>
        <div className="flex items-center gap-4 ">
          <IconButton {...getItemProps(1)} className="hover:text-green-500 text-black">
            1
          </IconButton>
          <IconButton {...getItemProps(2)} className="hover:text-green-500 text-black">
            2
          </IconButton>
          <IconButton {...getItemProps(3)} className="hover:text-green-500 text-black">
            3
          </IconButton>
          <IconButton {...getItemProps(4)} className="hover:text-green-500 text-black">
            4
          </IconButton>
          <IconButton {...getItemProps(5)} className="hover:text-green-500 text-black">
            5
          </IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-4 hover:text-green-500 text-black"
          onClick={next}
          disabled={active === 5}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default AdminMiddleComponent;
