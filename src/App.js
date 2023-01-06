import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome.mjs";
import Register from "./pages/Register.mjs";
import Login from "./pages/Login.mjs";
import Dashboard from "./pages/Dashboard.mjs";
import Products from "./pages/Products.mjs";
import Product from "./pages/Product.mjs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
