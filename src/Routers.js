import Home from "./pages/Home";
import Character from "./pages/Character";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Character />} />
        <Route path="/" element={<Home />} index/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
