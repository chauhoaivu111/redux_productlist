import React from "react";

import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Product from "../pages/Product";

import ProductDetail from "../components/productdetail/ProductDetail";
import ProductListing from "../components/productlist/ProductListing";

const Routers = () => {
  return (
    <>
     
      <Routes>
    

        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route>404 Not Found</Route>
      </Routes>
    </>
  );
};

export default Routers;
