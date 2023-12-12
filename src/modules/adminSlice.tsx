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
      console.log(current(state), "adminSlice");
      state.adminId = action.payload;
      console.log(state.adminId, "state.adminId");
    },
  },
});

export const { updateId } = adminSlice.actions;

export default adminSlice.reducer;
