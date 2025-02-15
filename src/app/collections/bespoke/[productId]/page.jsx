import React from "react";
import Product from "./Product";

export default async function Page({ params }) {
  const { productId } = await params;
  
  if (!productId) {
    return <p>Error: Product ID not found.</p>;
  }

  return <Product productId={productId} />;
}
export async function generateMetadata({ params }) {
  const { productId } = await params;
  const title = productId
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  return {
    title: title,
    description: `${title} by Mahesh Carpets, leaders in art of Carpet Manufacturing in India, with 50 years of expertise in Varanasi. Our portfolio encompasses an extensive array of handcrafted indoor rugs.`,
  }
}