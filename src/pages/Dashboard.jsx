import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product';
import './Dashboard.css';

function Dashboard() {
  const { products } = useLoaderData();
  const [productsData, setProductsData] = useState(products);
  const [searchValue, setSearchValue] = useState("");
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

  const deleteProduct = async (id) => {
    await productHandler.deleteProduct(id);
    setProductsData(productsData.filter(product => product.id !== id));
  }

  const addToCart = async (product) => {
    console.log("cart product array", cartProducts);
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
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
          <Product key={product.id} product={product} deleteProduct={deleteProduct} addToCart={addToCart} />
        ))}
      </section>
    </div>
  )
}

export default Dashboard;
