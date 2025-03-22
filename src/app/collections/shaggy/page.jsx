import React from 'react'
import Data from './Data'
import { shaggy } from "@/data/productdata.js";
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/Contact_us/ContactUs';
import Footer from '@/components/Footor/Footer';

export default function page() {
  return (
    <>
    <Navbar/>
    <Data data={shaggy} />
    <ContactUs/>
    <Footer/>
    </>
  )
}
export const metadata = {
  title: 'Shaggy Carpets & Rugs | Soft & Plush Flooring by Mahesh Carpets',
  description: 'Browse our collection of ultra-soft shaggy carpets. Perfect for cozy interiors, our plush rugs add warmth and comfort to any space.',
}