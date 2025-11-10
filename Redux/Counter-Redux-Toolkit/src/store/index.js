import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";

// ✅ Configure Store
export const CounterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
