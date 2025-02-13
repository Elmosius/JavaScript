import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";

const store = null

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Routes>
        <Route path={"/"} element={<App />} />
      </Routes>
    </Provider>
  </StrictMode>
);
