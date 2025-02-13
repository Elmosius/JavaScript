import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  selectors: {
    getDoubleCounter: (state) => state * 2,
    getCounter: (state, value) => state * value,
  },
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
export const { getDoubleCounter, getCounter } = counterSlice.selectors;
