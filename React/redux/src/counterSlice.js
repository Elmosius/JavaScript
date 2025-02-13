import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      if (action.payload) {
        return state + action.payload;
      } else {
        return (state += 1);
      }
    },
    decrement: (state, action) => {
      if (action.payload) {
        return state - action.payload;
      } else {
        return (state -= 1);
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
