import React, { useEffect, useState } from "react";
import TimeComponent from "../general/timeComponent";

function AdminMiddleComponent() {
  return (
    <div>
      <div className="w-[509px] h-full mx-[22px] overflow-y-visible overflow-x-hidden bg-blue-100">
        <TimeComponent />
        {/* menu button */}
        <div className="my-[30px] flex ">
          <div className="w-[66px] h-[19px] cursor-pointer mr-[30px]">Pending</div>
          <div className="w-[66px] h-[19px] cursor-pointer">Completed</div>
        </div>

        {/* card */}
        <div className="w-full h-[98px] bg-white p-[10px] ">
          <div className="w-full flex justify-between mb-[20px]">
            <p className="">orderNumber #00</p>
            <p>00:00</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Number of items total QTY</p>
            <div className="flex">
              <p className="mr-[20px]">$0.0</p>
              <div className="rounded-xl bg-green-500 w-[67px] h-[24px] flex justify-center alignItms-center ">
                Paid
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMiddleComponent;
