import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchById = createAsyncThunk("restaurants/categories", async (id, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:8080/categories");

    return response.data;
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;

    return thunkAPI.rejectWithValue(message);
  }
});
