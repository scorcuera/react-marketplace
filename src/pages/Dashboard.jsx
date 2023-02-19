import { Link, useLoaderData } from "react-router-dom"
import Product from '../components/Product'
import './Dashboard.css'

function Dashboard() {
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

export default Dashboard;
