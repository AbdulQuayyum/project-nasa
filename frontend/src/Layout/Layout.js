import React from 'react'

import { TopNavigation, Footer } from "../Components/Index"

export default function Layout(props) {
  const { children } = props
  return (
    <>
      <TopNavigation />
      <main className='Main'>
        {children}
      </main>
      <Footer />
    </>
  )
}
