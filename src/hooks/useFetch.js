import axios from "axios";
import { useRef, useEffect, useState, useCallback } from "react";

export default function useFetch({ url, method = "GET", payload = null, fn }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const response =
        typeof fn === "function"
          ? await fn()
          : await axios.request({
              data: payload,
              signal: controllerRef.current.signal,
              method,
              url,
            });
      setData(response?.data || response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
    return () => cancel();
  }, [fetchData]);

  return {
    refetch,
    cancel,
    data,
    error,
    isLoading,
  };
}
