import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Router/Home';
import ProductsPage from './components/Router/ProductsPage';
import Header from './components/Header';
import Cart from './components/Cart';
import Contact from './components/Router/Contact';
import About from './components/Router/About';
import NotFound from './components/Router/NotFound';
import Atention from './components/Router/Atention'
import ExclusiveProduct from './components/Router/ExclusiveProduct';
import Product from './components/Router/Product';

function App() {
  const [cart, setCart] = useState(false)
  const [prodsInCart, setProdsInCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0.00)
  const [products, setProducts] = useState([])

  function addProduct(id) {
    if (prodsInCart.some(prod => prod.id === id)) {
      return;
    } else {
      const prodToCart = products.find(product => product.id === id);
      if (prodToCart) {
        setProdsInCart([...prodsInCart, prodToCart]);
        setTotalPrice(totalPrice + prodToCart.price);
      }
    }
  }

  function removeProduct(id) {
    const newList = prodsInCart.filter(product => product.id !== id)
    setProdsInCart(newList)
  }

  function addTotalPrice(value) {
    setTotalPrice(totalPrice + value)
  }

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setProducts(data.products))
  })

  return (
    <Router>
        <Header prodsInCart={prodsInCart} setCart={setCart}/>
        <Cart 
          removeProduct={removeProduct}
          addTotalPrice={addTotalPrice}
          totalPrice={totalPrice}
          prodsInCart={prodsInCart}
          setCart={setCart}
          cart={cart}   
        />
        <Routes>
          <Route path='/'  element={
            <Home addProduct={addProduct} products={products} />
          }/>
          <Route path='/produtos' element={<ProductsPage addProduct={addProduct} products={products} />}/>
          <Route path='/produto/:id' element={<Product products={products} />} />
          <Route path='/produto/13' element={<ExclusiveProduct />} />
          <Route path='/contato' element={<Contact />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/checkout' element={<Atention />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App;