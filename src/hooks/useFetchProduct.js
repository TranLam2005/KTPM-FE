import { useState } from "react";
import { restApi } from "@/api/restApi";

export function useFetchProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchBySku(sku) {
    setLoading(true);
    setError(null);
    try {
      const res = await restApi.get(
        `/books/product/by-sku/${encodeURIComponent(sku)}`
      );
      return res.data;
    } catch (e) {
      setError(e?.response?.data?.detail || "Not found item");
      return null;
    } finally {
      setLoading(false);
    }
  }
  return { fetchBySku, loading, error, setError };
}
