import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  selectors: {
    getTodo: (state, id) => state.find((todo) => todo.id === id),
  },
  reducers: {
    addTodo: (state, action) => {
      const { name } = action.payload;
      state.push({ name, id: id++ });
    },

    removeTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    updateTodo: (state, action) => {
      const { id, name } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.name = name;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoListSlice.actions;
export const { getTodo } = todoListSlice.selectors;
