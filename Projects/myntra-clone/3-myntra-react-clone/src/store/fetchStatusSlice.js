// ✅ fetchStatusSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchDone: false,
  currentlyFetching: false, // renamed for clarity
};

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState,
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
