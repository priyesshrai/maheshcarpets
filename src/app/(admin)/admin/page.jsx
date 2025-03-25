'use client'
import React,{ useEffect } from 'react'

export default function page() {
  useEffect(() => {
    window.location.href = '/admin/dashboard'
  }, [])
  return (
    <div></div>
  )
}
