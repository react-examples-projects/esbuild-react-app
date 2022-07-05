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
