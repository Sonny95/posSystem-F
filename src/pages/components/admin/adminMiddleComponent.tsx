import React, { useEffect, useState } from "react";
import TimeComponent from "../general/timeComponent";
import AdminOrderHistory from "./adminOrderHistory";

function AdminMiddleComponents() {
  return (
    <div>
      <div className="w-[509px] h-[95%] mx-[22px] overflow-y-visible overflow-x-hidden ">
        <TimeComponent />
        {/* menu button */}
        <div className="my-[30px] flex ">
          <div className="w-[66px] h-[19px] cursor-pointer mr-[30px]">Pending</div>
          <div className="w-[66px] h-[19px] cursor-pointer">Completed</div>
        </div>

        {/* card */}
        <AdminOrderHistory />
      </div>
    </div>
  );
}

export default AdminMiddleComponents;
