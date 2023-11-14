import React from "react";
import CompleteButton from "../admin/completeButton";
import Link from "next/link";

interface Item {
  orderNumber: number;
  item: string;
  qty: number;
}

function AdminOrder({ item }: { item: Item[] }) {
  return (
    <div className="w-[309px] h-full p-[10px] mr-[16px] bg-white">
      {item.map((value) => (
        <div className="w-[289px] h-[24px] flex mt-[24px] text-xl">
          <p className="font-semibold mr-3">Order</p>
          <p>#{value?.orderNumber}</p>
        </div>
      ))}

      <div className="w-[239px] flex justify-between my-[20px]">
        <p>Item</p>
        <p>Qty</p>
      </div>

      {/* card */}
      {item.map((value) => (
        <div className=" w-[289px] h-[559px] mt-[20px] overflow-y-visible overflow-x-hidden">
          <div className="w-[289px] mb-[10px] bg-yellow-200 flex justify-between">
            <div className="w-[239px] bg-yellow-300 justify-between flex">
              <div className="w-[184px] bg-yellow-400">
                <p>{value?.item}</p>
              </div>
              <p>{value?.qty}</p>
            </div>
            <input type="checkbox"></input>
          </div>
        </div>
      ))}
      {/* completeButton */}
      <div className=" w-[289px] h-[48px] bottom-0">
        <Link href="/admin">
          <CompleteButton />
        </Link>
      </div>
    </div>
  );
}

export default AdminOrder;
