"use client";
import { useState, useEffect } from "react";
import { handTufted } from "@/data/productdata";

const useFetchHandTufted = (productId, productCategory) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId || !productCategory) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const filteredData = handTufted.find((item) => item.id === productId);

        if (filteredData) {
          setData(filteredData);
        } else {
          throw new Error("Product not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId, productCategory]);

  return { data, loading, error };
};

export default useFetchHandTufted;
