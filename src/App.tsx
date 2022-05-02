import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./UI/Home";
import Product from "./UI/Product";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
