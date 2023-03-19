import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product'
import './Dashboard.css'

function Dashboard() {
  const { products } = useLoaderData();
  console.log(products)
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
    <div className="block--dashboard">
      <div className="block--search-container">
        <label htmlFor="">Search</label>
        <input type="input" onChange={handleSearch} />
      </div>
      <section className="block--products-container">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} deleteProduct={deleteProduct} />
        ))}
      </section>
    </div>
  )
}

export default Dashboard;
