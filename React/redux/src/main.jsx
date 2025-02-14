import { configureStore } from "@reduxjs/toolkit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { counterSlice } from "./counterSlice.js";
import { todoListSlice } from "./todoListSlice.js";
import Counter from "./Counter.jsx";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import ListTodo from "./ListTodo.jsx";
import UpdateTodo from "./UpdateTodo.jsx";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/todolist" element={<ListTodo />} />
          <Route path="/todolist/edit/:id" element={<UpdateTodo />} />
          <Route
            path="/counter"
            element={
              <>
                <Counter /> <Counter />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
