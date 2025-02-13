import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice.js";
import Counter from "./Counter.jsx";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
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
