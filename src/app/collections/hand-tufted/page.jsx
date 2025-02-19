import React from 'react'
import Data from './Data'
import { handTufted } from "@/data/productdata.js";

export default function page() {
  return (
    <Data data={handTufted} />
  )
}
export const metadata = {
  title: 'Hand-Tufted Carpets | Artisanal Rugs for Elegant Spaces',
  description: 'Shop exquisite hand-tufted carpets, blending craftsmanship and elegance. Perfect for homes seeking style and durability.',
}