"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../modules/cartSlice";
import adminSlice from "../modules/adminSlice";
import adminCategorySlice from "./adminCategorySlice";
import adminMenuSlice from "./adminMenuSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    admin: adminSlice,
    adminCategory: adminCategorySlice,
    adminMenu: adminMenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
