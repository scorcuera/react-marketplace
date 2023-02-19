import { Link, useLoaderData } from "react-router-dom"
import Product from './components/Product'
import './App.css'

function App() {
    const { products } = useLoaderData();

    return (
        <>
        {products.map((product) => (
          <Link key={product.id} to={`products/${product.id}`} title={product.title} className="product--link">
            <Product product={product} />
          </Link>
        ))}
      </>
    )
}

export default App
