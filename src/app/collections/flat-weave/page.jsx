import React from 'react'
import Data from './Data'
import { flatWeave } from "@/data/productdata.js";

export default function page() {
  return (
    <Data data={flatWeave}/>
  )
}

export const metadata = {
  title: 'Flat Weave Rugs | Lightweight & Durable Carpets by Mahesh Carpets',
  description: 'Discover handcrafted flat weave rugs—lightweight, durable, and stylish. Ideal for modern interiors with a touch of tradition.',
}