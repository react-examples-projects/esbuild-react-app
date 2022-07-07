import { useEffect, useState } from "react";
import { CurrentTheme } from "../helpers/storage";

export default function useTheme() {
  const currentTheme = CurrentTheme();
  const [theme, setTheme] = useState(currentTheme.get());
  const isDak = theme === "dark";

  const toggle = () => {
    currentTheme.toggle();
    setTheme(currentTheme.get());
    document.body.classList.toggle("dark", currentTheme.get() === "dark");
  };

  useEffect(() => {
    document.body.classList.toggle("dark", currentTheme.get() === "dark");
  }, [currentTheme]);

  return {
    theme,
    toggle,
    isDak,
  };
}
