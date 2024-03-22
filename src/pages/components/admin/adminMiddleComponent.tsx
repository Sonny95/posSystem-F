import React, { useEffect, useState } from "react";
import TimeComponent from "../general/timeComponent";
import AdminTransaction from "./adminTransaction";
import ManageCategories from "./manageCategories";
import ManageMenu from "./manageMenu";

function AdminMiddleComponents({ selectedCategory }: any) {
  return (
    <div>
      <div className="w-[509px] h-[95%] mx-[22px] overflow-y-visible overflow-x-hidden ">
        <TimeComponent />
        {/* menu button */}

        {selectedCategory.name === "Transaction" && <AdminTransaction />}
        {selectedCategory.name === "Manage Categories" && <ManageCategories />}
        {selectedCategory.name === "Manage Foods" && <ManageMenu />}
      </div>
    </div>
  );
}

export default AdminMiddleComponents;
