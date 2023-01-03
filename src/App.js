import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome.mjs";
import Register from "./pages/Register.mjs";
import Login from "./pages/Login.mjs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
