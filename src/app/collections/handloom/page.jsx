import React from 'react'
import Data from './Data'
import { handloomData } from "@/data/productdata.js";

export default function page() {
  return (
    <Data data={handloomData}/>
  )
}

export const metadata = {
  title: 'Handloom Carpets | Elegant & Artisanal Rugs by Mahesh Carpets',
  description: 'Explore handloom carpets crafted with precision and elegance. Perfect for adding a refined touch to any home or office space.',
}