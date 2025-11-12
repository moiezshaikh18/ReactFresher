// store/itemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addInitialItems: (state, action) => {
      // handle both formats: either array or { items: [...] }
      const data = Array.isArray(action.payload)
        ? action.payload
        : action.payload.items || [];
      state.items = data;
    },
  },
});

export const itemsActions = itemSlice.actions;
