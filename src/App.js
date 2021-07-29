// import { Products } from '@chec/commerce.js/features/products'

import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'

import { Navbar, Products } from './component'
const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const data = await commerce.products.list()

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}

export default App
