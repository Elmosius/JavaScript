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
import ProductDetail from "./ProductDetail";
import Images from "./Images";
import NotFound from "./NotFound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images/*" element={<Images />} />
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="sellers" element={<Seller />} />
          <Route path="customer" element={<Customer />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
