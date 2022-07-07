import cache from "../helpers/cache";
import { useEffect, useState, useCallback } from "react";
import { makeCancelable } from "../helpers/utils";

export default function useFetch(key, fn) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (cache.get(key)) {
        setData(cache.get(key));
        return setLoading(false);
      }
      setError(null);
      const result = await fn(key);
      cache.put(key, result);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [key, fn]);

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    const cancelablePromise = makeCancelable(fetchData());
    return () => cancelablePromise.cancel();
  }, [fetchData]);

  return {
    refetch,
    data,
    error,
    isLoading,
  };
}
