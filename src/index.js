import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./stylesheets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import Products from "./components/Products";
import About from "./components/About";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
