import { createSlice } from "@reduxjs/toolkit";

// ✅ Initial State
const initialState = {
  count: 0,
  privacy: false,
};

// ✅ Create Slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    add: (state, action) => {
      state.count += action.payload;
    },
    sub: (state, action) => {
      state.count -= action.payload;
    },
    togglePrivacy: (state) => {
      state.privacy = !state.privacy;
    },
  },
});

// ✅ Export Actions
export const counterActions = counterSlice.actions;
