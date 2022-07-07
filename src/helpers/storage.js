export const Pagination = (key, init) => {
  const get = () => {
    return Number(localStorage.getItem(key) || 1);
  };
  const set = (page) => {
    localStorage.setItem(key, page);
  };

  if (init !== undefined && !get()) localStorage.setItem(key, init);

  return {
    get,
    set,
  };
};

export const CurrentTheme = (init = "light") => {
  const get = () => {
    return localStorage.getItem("theme");
  };
  const set = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const toggle = () => {
    get() === "light" ? set("dark") : set("light");
  };

  if (init !== undefined && !get()) localStorage.setItem("theme", init);

  return {
    get,
    set,
    toggle,
  };
};
