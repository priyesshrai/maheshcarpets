'use client'
import React from 'react'

export default function Tabs() {
    const tabConfig = [
        {
            tabName:"Dashboard",
            tabComponent: <Dashboard />
        },
        {
            tabName:"Blogs",
            tabComponent: <Blogs />
        },
        {
            tabName:"Add Blog",
            tabComponent: <AddBlog />
        }
    ]
  return (
    <div>Tabs</div>
  )
}
