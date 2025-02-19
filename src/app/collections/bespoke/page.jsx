import React from 'react'
import Data from './Data'
import { bespoke } from "@/data/productdata.js";

export default function page() {
  return (
    <Data  data={bespoke}/>
  )
}
export const metadata = {
  title: 'Custom Bespoke Carpets | Tailor-Made Rugs by Mahesh Carpets',
  description: 'Design your dream carpet with Mahesh Carpets. Our bespoke service creates personalized rugs tailored to your style and space.',
}