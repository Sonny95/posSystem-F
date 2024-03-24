import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import AdminTransactionManagement from "./adminTransactionManagement";
import AdminManageCategoriesManagement from "./adminManageCategoriesManagement";
import AdminManageMenuManagement from "./adminManageMenuManagement";

function AdminOrder({ selectedCategory }: any) {
  return (
    <div>
      {selectedCategory && (
        <div>
          {selectedCategory.name === "Transaction" && <AdminTransactionManagement />}
          {selectedCategory.name === "Manage Categories" && <AdminManageCategoriesManagement />}
          {selectedCategory.name === "Manage Foods" && <AdminManageMenuManagement />}
        </div>
      )}
    </div>
  );
}

export default AdminOrder;
