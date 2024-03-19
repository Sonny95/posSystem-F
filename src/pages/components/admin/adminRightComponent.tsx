import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import AdminTransactionManagement from "./adminTransactionManagement";
import AdminManageCategoriesManagement from "./adminManageCategoriesManagement";

function AdminOrder() {
  return (
    // <AdminManageCategoriesManagement />
    <AdminTransactionManagement />
  );
}

export default AdminOrder;
