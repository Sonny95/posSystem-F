export interface AdminState {
  adminId: number;
}

import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const initialState: AdminState = {
  adminId: 0,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<number>) => {
      state.adminId = action.payload;
    },
  },
});

export const { updateId } = adminSlice.actions;

export default adminSlice.reducer;
