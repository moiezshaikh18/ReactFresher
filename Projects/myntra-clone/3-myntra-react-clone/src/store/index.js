import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./itemsSlice";
import { fetchStatusSlice } from "./fetchStatusSlice";
import { bagSlice } from "./bagSlice";

export const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});
