import React from 'react'
import Data from './Data'
import { shaped } from "@/data/productdata.js";

export default function page() {
  return (
    <Data data={shaped} />
  )
}
export const metadata = {
  title: 'Unique Shaped Carpets | Custom & Artistic Rugs by Mahesh Carpets',
  description: 'Break the mold with uniquely shaped carpets. Discover artistic, custom-designed rugs that add personality to your décor.',
}