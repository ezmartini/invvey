import React from "react";
import { useNavigate, Outlet, Await } from "react-router-dom";
import { me } from "../api/user.js";
import { useState, useEffect } from "react";

export default function ProtectedRoutes() {
  const nav = useNavigate();

  async function getAuth() {
    try {
      const res = await me();
      return true;
    } catch (e) {
      return false;
    }
  }

  const [auth, setAuth] = useState(getAuth());

  return <> {auth ? <Outlet /> : nav("/login")}</>;
}
