import React from 'react'
import Data from './Data'
import { handloomData } from "@/data/productdata.js";
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/Contact_us/ContactUs';
import Footer from '@/components/Footor/Footer';

export default function page() {
  return (
    <>
      <Navbar />
      <Data data={handloomData} />
      <ContactUs />
      <Footer />
    </>
  )
}

export const metadata = {
  title: 'Handloom Carpets | Elegant & Artisanal Rugs by Mahesh Carpets',
  description: 'Explore handloom carpets crafted with precision and elegance. Perfect for adding a refined touch to any home or office space.',
}