import React, { useEffect, useState } from "react";
import TimeComponent from "../general/timeComponent";
import AdminTransaction from "./adminTransaction";
import ManageCategories from "./manageCategories";
import ManageMenu from "./manageMenu";

function AdminMiddleComponents() {
  return (
    <div>
      <div className="w-[509px] h-[95%] mx-[22px] overflow-y-visible overflow-x-hidden ">
        <TimeComponent />
        {/* menu button */}

        {/* card */}
        {/* <AdminTransaction /> */}
        {/* <ManageCategories /> */}
        <ManageMenu />
      </div>
    </div>
  );
}

export default AdminMiddleComponents;
