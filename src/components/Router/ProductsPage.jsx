import React from 'react'
import Products from '../Products'
import Footer from '../Footer'

export default function ProductsPage({products, addProduct}) {
  return (
    <>
      <main className='main-prod'>
          <h2>Produtos</h2>
          <Products addProduct={addProduct} products={products} />
      </main>
      <Footer />
    </>
  )
}
