import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import App from "./App";

import Intelligence from "./pages/Intelligence";
import Reports from "./pages/Reports";
import Sponsored from "./pages/Sponsored";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/intelligence" element={<Intelligence />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/sponsored" element={<Sponsored />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/product" element={<Product />} />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);