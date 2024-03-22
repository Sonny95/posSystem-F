import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import AdminTransactionManagement from "./adminTransactionManagement";
import AdminManageCategoriesManagement from "./adminManageCategoriesManagement";
import AdminManageMenuManagement from "./adminManageMenuManagement";

function AdminOrder() {
  return (
    <AdminTransactionManagement />
    // <AdminManageCategoriesManagement />
    // <AdminManageMenuManagement />
  );
}

export default AdminOrder;
