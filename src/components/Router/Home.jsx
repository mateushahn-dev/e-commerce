import React from 'react'
import Depoiments from '../Depoiments'
import Footer from '../Footer'
import Main from '../Main'

export default function Home({products, addProduct}) {
  return (
    <>
      <Main addProduct={addProduct} products={products} />
      <Depoiments />
      <Footer />
    </>
  )
}
