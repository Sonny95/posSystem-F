import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../modules/cartSlice";
import adminSlice from "../modules/adminSlice";

export const store = configureStore({
  reducer: { cart: cartSlice, admin: adminSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
