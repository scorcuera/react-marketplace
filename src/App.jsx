import { useEffect, useState } from 'react'
import { productHandler } from './handlers/productHandler';
import Product from './components/Product'

import './App.css'

function App() {
  let [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let data = await productHandler.loadProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
      {products.map(product => {
        return (
          <Product key={product.id} data={[product.title, product.description, product.price]} />
        )
      })}
    </>
  )
}

export default App
