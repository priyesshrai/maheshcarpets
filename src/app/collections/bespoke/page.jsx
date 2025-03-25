import React from 'react'
import Data from './Data'
import { bespoke } from "@/data/productdata.js";
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/Contact_us/ContactUs';
import Footer from '@/components/Footor/Footer';

export default function page() {
  return (
    <>
      <Navbar />
      <Data data={bespoke} />
      <ContactUs />
      <Footer />
    </>
  )
}
export const metadata = {
  title: 'Custom Bespoke Carpets | Tailor-Made Rugs by Mahesh Carpets',
  description: 'Design your dream carpet with Mahesh Carpets. Our bespoke service creates personalized rugs tailored to your style and space.',
}