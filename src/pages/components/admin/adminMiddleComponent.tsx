import React, { useEffect, useState } from "react";
import TimeComponent from "../general/timeComponent";
import AdminOrderHistory from "./adminOrderHistory";

function AdminMiddleComponents() {
  const [selectedstatus, setSelectedstatus] = useState("Pending");

  const handlePendingClick = () => {
    setSelectedstatus("Pending");
  };

  const handleCompletedClick = () => {
    setSelectedstatus("Completed");
  };

  return (
    <div>
      <div className="w-[509px] h-[95%] mx-[22px] overflow-y-visible overflow-x-hidden ">
        <TimeComponent />
        {/* menu button */}
        <div className="my-[30px] flex ">
          <button
            onClick={handlePendingClick}
            className={`w-[90px] h-[35px] cursor-pointer mr-[30px] rounded-lg flex items-center justify-center text-black ${
              selectedstatus === "Pending"
                ? "bg-[#003049] text-white"
                : "bg-white hover:bg-[#003049] hover:text-white"
            }`}
          >
            Pending
          </button>
          <button
            onClick={handleCompletedClick}
            className={`w-[90px] h-[35px] cursor-pointer mr-[30px] rounded-lg flex items-center justify-center text-black ${
              selectedstatus === "Completed"
                ? "bg-[#003049] text-white"
                : "bg-white hover:bg-[#003049] hover:text-white"
            }`}
          >
            Completed
          </button>
        </div>
        {/* card */}
        <AdminOrderHistory selectedstatus={selectedstatus} />
      </div>
    </div>
  );
}

export default AdminMiddleComponents;
