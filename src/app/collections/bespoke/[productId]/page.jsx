import React from "react";
import Product from "./Product";
import Navbar from "@/components/Navbar/Navbar";
import ContactUs from "@/components/Contact_us/ContactUs";
import Footer from "@/components/Footor/Footer";

export default async function Page({ params }) {
  const { productId } = await params;

  if (!productId) {
    return <p>Error: Product ID not found.</p>;
  }

  return (
    <>
      <Navbar />
      <Product productId={productId} />
      <ContactUs />
      <Footer />
    </>
  );
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