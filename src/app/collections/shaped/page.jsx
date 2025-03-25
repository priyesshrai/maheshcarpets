import React from 'react'
import Data from './Data'
import { shaped } from "@/data/productdata.js";
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/Contact_us/ContactUs';
import Footer from '@/components/Footor/Footer';

export default function page() {
  return (
    <>
      <Navbar />
      <Data data={shaped} />
      <ContactUs />
      <Footer />
    </>
  )
}
export const metadata = {
  title: 'Unique Shaped Carpets | Custom & Artistic Rugs by Mahesh Carpets',
  description: 'Break the mold with uniquely shaped carpets. Discover artistic, custom-designed rugs that add personality to your décor.',
}