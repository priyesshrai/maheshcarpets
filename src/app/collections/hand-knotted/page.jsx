import React from 'react'
import Data from './Data'
import { handKnotted } from "@/data/productdata.js";
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/Contact_us/ContactUs';
import Footer from '@/components/Footor/Footer';

export default function page() {
  return (
    <>
    <Navbar/>
    <Data data={handKnotted} />
    <ContactUs/>
    <Footer/>
    </>
  )
}
export const metadata = {
  title: 'Hand-Knotted Carpets | Timeless Luxury Rugs by Mahesh Carpets',
  description: 'Explore premium hand-knotted carpets, crafted with precision and artistry. Elevate your home with timeless luxury and unmatched quality.',
}