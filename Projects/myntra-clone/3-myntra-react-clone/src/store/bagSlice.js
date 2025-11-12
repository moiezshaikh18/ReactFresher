// store/itemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
