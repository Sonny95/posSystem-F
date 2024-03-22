"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../modules/cartSlice";
import adminSlice from "../modules/adminSlice";
import adminManageSlice from "./adminManageSlice";

export const store = configureStore({
  reducer: { cart: cartSlice, admin: adminSlice, adminManage: adminManageSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
