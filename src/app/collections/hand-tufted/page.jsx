import React from 'react'
import Data from './Data'
import { handTufted } from "@/data/productdata.js";
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/Contact_us/ContactUs';
import Footer from '@/components/Footor/Footer';

export default function page() {
  return (
    <>
      <Navbar />
      <Data data={handTufted} />
      <ContactUs />
      <Footer />
    </>
  )
}
export const metadata = {
  title: 'Hand-Tufted Carpets | Artisanal Rugs for Elegant Spaces',
  description: 'Shop exquisite hand-tufted carpets, blending craftsmanship and elegance. Perfect for homes seeking style and durability.',
}