import React from "react";
import Home from "./pages/Home";
import Character from "./pages/Character";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Character />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={() => <h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
