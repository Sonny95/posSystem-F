import React, { useEffect, useState } from "react";
import TimeComponent from "../general/timeComponent";
import AdminOrderHistory from "./adminOrderHistory";

function AdminMiddleComponents() {
  const [selectedstatus, setSelectedstatus] = useState("pending");

  const handlePendingClick = () => {
    setSelectedstatus("Pending");
    console.log(selectedstatus, "Pending?");
  };

  const handleCompletedClick = () => {
    setSelectedstatus("Completed");
    console.log(selectedstatus, "Completed?");
  };

  return (
    <div>
      <div className="w-[509px] h-[95%] mx-[22px] overflow-y-visible overflow-x-hidden ">
        <TimeComponent />
        {/* menu button */}
        <div className="my-[30px] flex ">
          <button
            onClick={handlePendingClick}
            className="w-[66px] h-[20px] cursor-pointer mr-[30px] hover:font-bold"
          >
            Pending
          </button>
          <button
            onClick={handleCompletedClick}
            className="w-[66px] h-[19px] cursor-pointer hover:font-bold"
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
