import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productService } from "../services/productService";
import Product from '../components/Product'
import './Dashboard.css'

function Dashboard() {
  const products = useLoaderData();
  const [productsData, setProductsData] = useState(products);
  const [searchValue, setSearchValue] = useState("");

  const deleteProduct = async (id) => {
    await productService.deleteProduct(id);
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
    <div className="grid bg-amber-50 min-h-90v">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10 py-10 px-5">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} deleteProduct={deleteProduct} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard;
