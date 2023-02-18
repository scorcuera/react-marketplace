import { Link, useLoaderData } from "react-router-dom"
import Product from './components/Product'
import './App.css'

function App() {
    const { products } = useLoaderData();

    return (
        <>
            {products.map(product => {
                return (
                    <Link to={`products/${product.id}`}>
                        <Product key={product.id} data={[product.title, product.description, product.price]} />
                    </Link>
                )
            })}
        </>
    )
}

export default App
