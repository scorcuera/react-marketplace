import { useState } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
  console.log(cartProducts)

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }

  return (
    <div>
      {cartProducts.map((product) => {
        return (
          <>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
          </>
        )
      })}
      <button onClick={() => removeCartProducts()}>clear cart</button>
    </div>
  )
}

export default Cart

