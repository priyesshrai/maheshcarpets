import React from 'react'
import Data from './Data'
import { shaggy } from "@/data/productdata.js";

export default function page() {
  return (
    <Data data={shaggy} />
  )
}
export const metadata = {
  title: 'Shaggy Carpets & Rugs | Soft & Plush Flooring by Mahesh Carpets',
  description: 'Browse our collection of ultra-soft shaggy carpets. Perfect for cozy interiors, our plush rugs add warmth and comfort to any space.',
}