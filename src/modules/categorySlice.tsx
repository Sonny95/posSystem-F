import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

interface categoryState {
  categoryList: any[];
}

const initialState: categoryState = {
  categoryList: [],
};

export const categorySlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
