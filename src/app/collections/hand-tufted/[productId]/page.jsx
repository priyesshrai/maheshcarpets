import React from "react";
import Product from "./Product";

export default async function Page({ params }) {
  const { productId } = await params;

  if (!productId) {
    return <p>Error: Product ID not found.</p>;
  }

  return <Product productId={productId} />;
}
