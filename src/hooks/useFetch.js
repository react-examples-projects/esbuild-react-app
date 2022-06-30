import { useEffect, useState, useCallback } from "react";
import { makeCancelable } from "../helpers/utils";

export default function useFetch(key, fn) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const result = await fn(key);
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
