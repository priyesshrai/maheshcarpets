import React from 'react'
import Data from './Data'
import { flatWeave } from "@/data/productdata.js";
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/Contact_us/ContactUs';
import Footer from '@/components/Footor/Footer';

export default function page() {
  return (
    <>
      <Navbar />
      <Data data={flatWeave} />
      <ContactUs />
      <Footer />
    </>
  )
}

export const metadata = {
  title: 'Flat Weave Rugs | Lightweight & Durable Carpets by Mahesh Carpets',
  description: 'Discover handcrafted flat weave rugs—lightweight, durable, and stylish. Ideal for modern interiors with a touch of tradition.',
}