import Home from "./pages/Home";
import Character from "./pages/Character";
import NotFound from "./pages/NotFound";
import useTheme from "./hooks/useTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routers() {
  useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Character />} />
        <Route path="/" element={<Home />} index />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
