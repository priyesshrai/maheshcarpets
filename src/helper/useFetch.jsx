"use client";
import { useState, useEffect } from "react";
import { handloomData } from "@/data/productdata";

const useFetch = (productId, productCategory) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId || !productCategory) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const filteredData = handloomData.find(
          (item) => item.id === productId && item.category === productCategory
        );

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

export default useFetch;
