import React from "react";

function AdminOrder() {
  return (
    <div className="w-[309px] h-full p-[10px] mr-[16px] bg-yellow-100">
      <div className="w-[289px] h-[24px] flex mt-[24px] text-xl">
        <p className="font-semibold mr-3">Order</p>
        <p>#orderNum</p>
      </div>

      <div className="flex justify-between my-[20px]">
        <p>Item</p>
        <p className="mr-[40px]">Qty</p>
      </div>

      <div></div>
    </div>
  );
}

export default AdminOrder;
