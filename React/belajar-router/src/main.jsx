import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Seller from "./Seller";
import Customer from "./Customer";
import Data from "./Data";
import DataLayout from "./DataLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />}></Route>
          <Route path="products" element={<Product />}></Route>
          <Route path="sellers" element={<Seller />}></Route>
          <Route path="customer" element={<Customer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
