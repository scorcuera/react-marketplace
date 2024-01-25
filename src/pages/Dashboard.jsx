import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product'
import './Dashboard.css'

function Dashboard() {
  const products = useLoaderData();
  const [productsData, setProductsData] = useState(products);
  const [searchValue, setSearchValue] = useState("");

  const deleteProduct = async (id) => {
    await productHandler.deleteProduct(id);
    setProductsData(productsData.filter(product => product.id !== id));
  }

  const handleSearch = (event) => {
    let searchInput = event.target.value;
    setSearchValue(searchInput);
  }

  let filteredProducts = productsData.filter(product => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} deleteProduct={deleteProduct} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
