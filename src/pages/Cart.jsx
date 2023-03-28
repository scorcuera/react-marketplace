import { useState } from "react";
import ProductCart from "../components/ProductCart";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
  const [total, setTotal] = useState(0);
  
  const getTotal = (total) => {
    setTotal(total);
  }

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }

  return (
    <div>
      {cartProducts.map((product) => {
        return <ProductCart product={product} getTotal={getTotal} />
      })}
      <button onClick={() => removeCartProducts()}>clear cart</button>
      <p>total price: {total}€ </p>
    </div>
  )
}

export default Cart

