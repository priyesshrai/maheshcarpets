import React from "react";
import Product from "./Product";

export default async function Page({ params }) {
  const { productName } = await params;

  if (!productName) {
    return <p>Error: Product ID not found.</p>;
  }

  return <Product productName={productName} />;
}
