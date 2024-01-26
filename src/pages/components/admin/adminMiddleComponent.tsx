import React, { useEffect, useState } from "react";
import TimeComponent from "../general/timeComponent";
import AdminOrderHistory from "./adminOrderHistory";

function AdminMiddleComponents() {
  const [selectedstatus, setSelectedstatus] = useState("pending");

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
            className="w-[90px] h-[35px] cursor-pointer mr-[30px] hover:font-bold rounded-lg text-white bg-[#003049]"
          >
            Pending
          </button>
          <button
            onClick={handleCompletedClick}
            className="w-[90px] h-[35px] cursor-pointer hover:font-bold rounded-lg text-white bg-[#003049]"
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
